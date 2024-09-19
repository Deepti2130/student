import { Component, OnInit } from "@angular/core";
import { Istd2 } from "../../model/std2";


@Component({
  selector:'app-std2',
  templateUrl:'./std2.component.html',
  styleUrls:['./std2.component.scss']
})
export class std2component implements OnInit{

  fnamevalue !:string;
  lnamevalue !:string;
  emailvalue !:string;
  contactvalue !:number;

  std2Arr:Array<Istd2> = [
    {
      fname:"Jeet",
      lname:"Patil",
      email:"harshp@gmail.com",
      contact:7867564533
    },
    {
      fname:"Trisha",
      lname:"Tare",
      email:"sneh@gmail.com",
      contact:9089564577
    },
    {
      fname:"Tushar",
      lname:"Chavan",
      email:"geeta@gmail.com",
      contact:6789564533
    },
    {
      fname:"Pavan",
      lname:"Gore",
      email:"AshwinGp@gmail.com",
      contact:9089667744
    }
  ]


  constructor(){}


  ngOnInit(): void {

  }

  onstd2Add(fnamevalue:HTMLInputElement, lnamevalue:HTMLInputElement, emailvalue:HTMLInputElement, contactvalue:HTMLInputElement){
  let newstd2 = {
    fname:fnamevalue.value,
    lname:lnamevalue.value,
    email:emailvalue.value,
    contact:isNaN(+contactvalue.value)? "-" : +contactvalue.value,
  }
  this.std2Arr.push(newstd2);
  fnamevalue.value = " ";
  lnamevalue.value = " ";
  emailvalue.value = " ";
  contactvalue.value = " ";
  }

}
