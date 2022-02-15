import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PlaylistComponent } from './component/playlist/playlist.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';

import { PlayComponent } from './component/play/play.component';
import { CardComponent } from './component/cards/card.component';

import { SidenavbarComponent } from './component/sidenavbar/sidenavbar.component';

import { CategoriesHomeComponent } from './component/categories-home/categories-home.component';
import {CategoryComponent} from "./component/category/category.component";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    PlaylistComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,

    SidenavbarComponent,
    PlayComponent,
    CardComponent,
  
    CategoriesHomeComponent,
    CategoryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
