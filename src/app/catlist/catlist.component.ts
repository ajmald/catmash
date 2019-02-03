import { Component, OnInit } from '@angular/core';
import {CatsService} from '../cats.service';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {
  catListObj:any;
  catList:any;

  constructor(private catsService:CatsService) { }

  ngOnInit() {
    this.getListCat(); 
  }

  getListCat(){
    this.catsService.getAllCats().subscribe( res => {
      this.catListObj = res;
      this.catList = this.catListObj.images;
      if(this.catList.length >0){
        this.sortCatByScore();
      }

    }, error => {
      console.log("Error: ", error);
    })

    
  }

  sortCatByScore(){
    this.catList.sort((a,b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0));
  }



}
