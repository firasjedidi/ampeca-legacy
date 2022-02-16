import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/authentification/login/login.component';
import {PlaylistComponent} from './component/playlist/playlist.component';
import {ProfileComponent} from './component/profile/profile.component';
import { SignupComponent } from './component/authentification/signup/signup.component';
import { CategoryComponent } from './component/category/category.component';


import {AddMusicComponent} from './component/add/add-music/add-music.component';
import { AddAlbumComponent } from './component/add/add-album/add-album.component';

const routes: Routes = [
  {path:'home/:id', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'playlist', component:PlaylistComponent},
  {path:'profile', component:ProfileComponent},
  {path:'signup', component:SignupComponent},
  {path:'category', component:CategoryComponent},
  {path:'addmusic', component:AddMusicComponent},
  {path:'addalbum',component:AddAlbumComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
