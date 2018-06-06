import { Component, OnInit } from '@angular/core';
class danger{
  danger:string;
  
  constructor(danger:string){
  
    this.danger = danger;
  }
  
  }
@Component({
  selector: 'dangermessage',
  templateUrl: './dangermessage.component.html',
  template:`
  <h1>I hope I'm not in {{danger}}</h1>
  <hr>
  `,
  styleUrls: ['./dangermessage.component.css']
})
export class DangerMessageComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
  }

  danger = "DANGER";

}