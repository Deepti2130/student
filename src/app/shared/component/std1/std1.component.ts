import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Istd1 } from "../../model/std1";


@Component({
  selector:'app-std1',
  templateUrl:'./std1.component.html',
  styleUrls:['./std1.component.scss']
})
export class std1component implements OnInit{
// by using property binding
@ViewChild("fnamevalue") fnamevalue ! : ElementRef;
@ViewChild("lnamevalue") lnamevalue ! : ElementRef;
@ViewChild("emailvalue") emailvalue ! : ElementRef;
@ViewChild("contactvalue") contactvalue ! : ElementRef;

  std1Arr:Array<Istd1> = [
    {
      fname:"Harsh",
      lname:"Patil",
      email:"harshp@gmail.com",
      contact:7867564533
    },
    {
      fname:"Sneha",
      lname:"Tare",
      email:"sneh@gmail.com",
      contact:9089564577
    },
    {
      fname:"Geeta",
      lname:"Chavan",
      email:"geeta@gmail.com",
      contact:6789564533
    },
    {
      fname:"Ashwin",
      lname:"Gore",
      email:"AshwinGp@gmail.com",
      contact:9089667744
    }
  ]

  constructor(){

  }

  ngOnInit(): void {

  }

  onstd1Add(){
  let newstd1 = {
    fname:this.fnamevalue.nativeElement.value,
    lname:this.lnamevalue.nativeElement.value,
    email:this.emailvalue.nativeElement.value,
    contact:isNaN(+this.contactvalue.nativeElement.value) ? "-" : +this.contactvalue.nativeElement.value,

  }
  this.std1Arr.unshift(newstd1);
  this.fnamevalue.nativeElement.value = " ";
  this.lnamevalue.nativeElement.value = " ";
  this.emailvalue.nativeElement.value = " ";
  this.contactvalue.nativeElement.value = " ";
  }


}
