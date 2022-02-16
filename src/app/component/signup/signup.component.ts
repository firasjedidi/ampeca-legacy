import { Component, OnInit,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
@Injectable({
  providedIn:'root'
})
export class SignupComponent implements OnInit {
  constructor(private http:HttpClient) { }
  url='http://localhost:3000/'
  placeholder:string =""
  persondata:any={}
  ngOnInit(): void {
  }
  onKey(event:any,id:string){
  this.placeholder=event.target.value
  console.log(this.placeholder,event.target.name);
  this.persondata[id]=this.placeholder
  console.log(this.persondata[id]);
  }
on(event:any){
 event.preventDefault();
//  this.email,this.password,this.date
  console.log(this.persondata);
  return this.http.post(this.url,this.persondata)

}
}
