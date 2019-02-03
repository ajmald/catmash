import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Image} from './image';
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


  private imagesUrl = './assets/cats.json';
  // Cors is not enabled at Atelier, so this is not possible
  //private imagesUrl = 'https://latelier.co/data/cats.json';

  constructor(private http: HttpClient, private messageService: MessageService) {
    //The below call works as well but I will not use it.
    /* this.getJSON().subscribe(data => {
            console.log(data)
        });
        */
  }

  getAllCats (): Observable<Image[]> {
      return this.http.get<Image[]>(this.imagesUrl)
        .pipe(
          tap(_ => this.log('fetched images')),
          catchError(this.handleError('getAllCats', []))
        )
    }


public getJSON():Observable<any> {
  return this.http.get(this.imagesUrl)
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
