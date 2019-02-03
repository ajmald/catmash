import { Component, OnInit } from '@angular/core';
import {CatsService} from '../cats.service';
import {Image} from '../image';



@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})

export class CatsComponent implements OnInit {

  images : any[] = [];
  randomId : number;
  randomId2 : number;
  randomUrl: string;
  randomUrl2: string;

  constructor(private catsService : CatsService) {



  }




  ngOnInit() {
    //This one below works but images object not created
    /*this.catsService.getJSON().subscribe(data => {
            console.log(data);*/
            this.catsService.getAllCats()
                .subscribe(
                  (res: any) => {
                    //alert("Cats Success");
                    this.images = res.images;
                    this.randomUrl = this.images[Math.floor(Math.random()* this.images.length)].url;
                    this.randomUrl2 = this.images[Math.floor(Math.random()* this.images.length)].url;
                    // Where you find the array res.data or res.data.data
                    console.log('id is ', res.images[0].id);
                    console.log('url is ', res.images[0].url);
                  },
                  error => {
                    alert("ERROR");
                  });
                }



}
