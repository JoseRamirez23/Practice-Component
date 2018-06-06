import { Component, OnInit } from '@angular/core';

class success{
success:string;

constructor(success:string){

  this.success = success;
}

}

@Component({
  selector: 'successmessage',
  templateUrl: './successmessage.component.html',
  template:`
  <h1>This was a {{success}}</h1>
  `,
  styleUrls: ['./successmessage.component.css']
})
export class SuccessMessageComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
  }

  success = "SUCCESS !!!";

}