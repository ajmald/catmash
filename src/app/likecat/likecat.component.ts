import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';


@Component({
  selector: 'app-like-cat',
  templateUrl: './likecat.component.html',
  styleUrls: ['./likecat.component.scss']
})
export class LikeCatComponent implements OnInit {

  catListObj:any;
  catList:any = [];
  currentVote: number;
  
  currentDisplayCat1 = 0;
  currentDisplayCat2 = 1;
  votesArray: any = [];
  catVotedList: any = [];

  randomIndex1:number = 0;
  randomIndex2:number = 1;
  randomId1 : string;
  randomId2 : string;
  randomUrl1: string;
  randomUrl2: string;

  constructor(private catService:CatsService) { 
     this.votesArray = localStorage.getItem("votesArray");
     if (!this.votesArray) localStorage.setItem("votesArray","[]");
  }

  ngOnInit() {
    this.getListCat(); 
    let currentVoteStorage = localStorage.getItem("currentVoteIndex");
    this.currentVote = (currentVoteStorage) ? parseInt(currentVoteStorage) : 0;
    console.log("currentVote onINIT: ", this.currentVote);
    this.votesArray = localStorage.getItem("votesArray");
    this.votesArray = (this.votesArray) ? JSON.parse(this.votesArray) : []; 
  }

  getListCat(){
    this.catService.getAllCats()
    .subscribe(
      (res: any) => {
        //alert("Cats Success");
        this.catList = res.images;
        this.randomIndex1= Math.floor(Math.random() * this.catList.length);
          this.randomIndex2 = Math.floor(Math.random() * this.catList.length);
          this.randomId1 = this.catList[this.randomIndex1].id;
          this.randomId2 = this.catList[this.randomIndex2].id;
          this.randomUrl1 = this.catList[this.randomIndex1].url;
          this.randomUrl2 = this.catList[this.randomIndex2].url;
          console.log("randomId1",this.randomId1);
          console.log("randomId2:", this.randomId2);
      },
      error => {
        alert("ERROR");
      });
    }

  public get cats(): IMasonryGalleryImage[] {
    this.getListCat();
    return this.catVotedList.map(m => <IMasonryGalleryImage>{
      imageUrl: m.url,
      alt: m.id
    });
  }

  clickVote(ID:any){
    console.log("Clickvote id: ", ID);

    this.catService.voteCat(ID).subscribe( res => {
      console.log("Res cat vote ", res);
    }, error =>{
      console.log("Error cat vote ", error);
    });
    this.votesArray = localStorage.getItem("votesArray");
    console.log("votesArray click vote: ", this.votesArray);
    this.votesArray = (this.votesArray) ? JSON.parse(this.votesArray) : [];
    if (!this.votesArray.includes(ID)) this.votesArray.push(ID);
      localStorage.setItem("votesArray", JSON.stringify(this.votesArray));

    this.currentVote += 1;
    console.log("currentVote onclick: ", this.currentVote);
    localStorage.setItem("currentVoteIndex", JSON.stringify(this.currentVote));
    this.getListCat();
  }

}
