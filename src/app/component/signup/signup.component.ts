import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }
  username=""
  email=""
  password=""
  date=""
  ngOnInit(): void {
  }
  onKey(event:Event){
    // this.(event.target as HTMLInputElement).name=(event.target as HTMLInputElement).value
   console.log((event.target as HTMLInputElement).name)
  }
on(event:any){
 event.preventDefault();
  console.log(this.username,this.email,this.password,this.date);
}
}
