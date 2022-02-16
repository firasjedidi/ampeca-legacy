import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }
  placeholder:string =""
  persondata:any={}
  ngOnInit(): void {
  }
  onKey(event:any,id:string){
    // this.(event.target as HTMLInputElement).name=(event.target as HTMLInputElement).value
  //   var user=name;
  //   var email=event.target.value;
  //   var pass=event.target.value;
  //   var date=event.target.value;
  //   this.username=user
  //  this.email=email
  //  this.date=date
  //  this.password=pass
  this.placeholder=event.target.value
  console.log(this.placeholder,event.target.name);
  this.persondata[id]=this.placeholder
  
  console.log(this.persondata[id]);
  
  
  }
on(event:any){
 event.preventDefault();
//  this.email,this.password,this.date
  console.log(this.persondata);
}
}
