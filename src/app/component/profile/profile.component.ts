import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
auth=false
  constructor() { }

  ngOnInit(): void {
  }
  input(event:any){

  }
  edit(){
    this.auth=!this.auth;
  }
  onClick(event:any) {
    event.preventDefault();
  }

}
