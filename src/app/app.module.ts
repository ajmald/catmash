import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LikeCatComponent } from './likecat/likecat.component';
import { CatlistComponent } from './catlist/catlist.component';
import { CatsService } from './cats.service';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NavbarComponent,
    LikeCatComponent,
    CatlistComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MasonryGalleryModule
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
