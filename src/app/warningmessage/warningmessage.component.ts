import { Component, OnInit } from '@angular/core';

 
  
@Component({
  selector: 'warningmessage',
  templateUrl: './warningmessage.component.html',
  template:`
  <h1>This is {{Warning}} </h1>
  <hr>
  `,
  styleUrls: ['./warningmessage.component.css']

  
})
export class WarningMessageComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
    
  }

  Warning = 'warning';
  

  
}