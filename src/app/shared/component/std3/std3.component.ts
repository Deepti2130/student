import { Component, OnInit } from "@angular/core";
import { Istd3 } from "../../model/std3";


@Component({
  selector:'app-std3',
  templateUrl:'./std3.component.html',
  styleUrls:['./std3.component.scss']
})
export class std3component implements OnInit{
  fnamevalue ! : string;
  lnamevalue ! : string;
  emailvalue ! : string;
  contactvalue ! : number;

  std3Arr:Array<Istd3> = [
    {
      fname:"Gourav",
      lname:"Patil",
      email:"harshp@gmail.com",
      contact:7867564533
    },
    {
      fname:"Pankaj",
      lname:"Tare",
      email:"sneh@gmail.com",
      contact:9089564577
    },
    {
      fname:"Sandip",
      lname:"Chavan",
      email:"geeta@gmail.com",
      contact:6789564533
    },
    {
      fname:"Pramila",
      lname:"Gore",
      email:"AshwinGp@gmail.com",
      contact:9089667744
    }
  ]


  constructor(){}


  ngOnInit(): void {

  }

  onstd3Add(){
    let newstd3 ={
      fname:this.fnamevalue,
      lname:this.lnamevalue,
      email:this.emailvalue,
      contact:isNaN(+this.contactvalue)? "-" : +this.contactvalue
    }
    this.std3Arr.push(newstd3);
    this.fnamevalue = " ";
    this.lnamevalue = " ";
    this.emailvalue = " ";
    this.contactvalue = 0
  }
}
