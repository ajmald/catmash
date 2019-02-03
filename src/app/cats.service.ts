import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cat } from './cat';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private baseUrl = "https://catmash-api-rest.herokuapp.com/";
  private proxyURL = "https://ng-cors-proxy.herokuapp.com/";

  private imagesUrl = './assets/cats.json';
  private catsUrl = this.proxyURL + this.baseUrl;

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getData() {
    console.log(`Fetching data from web service ${this.catsUrl}`)
    return this.http
               .get(this.catsUrl + "cats");
  }

//Fetching from Json if web service fails

/*
getAllCats (): Observable<Cat[]> {
  return this.http.get<Cat[]>(this.catsUrl + "cats")
    .pipe(
      tap(_ => this.log('fetched images')),
      catchError(this.handleError('getAllCats', []))
    )
}
*/

  getAllCats(){
    return this.http.get(this.catsUrl + "cats");
  }

 

  voteCat(catID){
    return this.http.post(this.catsUrl + "cats/" + catID, '');
  }

 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

private log(message: string) {
   this.messageService.add(`CatsService: ${message}`);
 }



}
