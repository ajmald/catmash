import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatlistComponent } from './catlist/catlist.component';
import { CommonModule } from '@angular/common';
import { LikeCatComponent } from './likecat/likecat.component';

const routes: Routes = [
  { path: 'vote', component: LikeCatComponent },
  { path: 'cat-list', component: CatlistComponent },
  { path: '**', component: LikeCatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
