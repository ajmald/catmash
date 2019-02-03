import { Component, OnInit } from '@angular/core';
import {CatsService} from './cats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catmash';

  constructor(public catsService: CatsService,public response: Router){

  }
  catsList: any;

  ngOnInit() {
    this.getCats()
  }
    getCats() {
    this.catsService.getAllCats()
    .subscribe((res : any) => {
      this.catsList = res.images;
      })
    }


}
