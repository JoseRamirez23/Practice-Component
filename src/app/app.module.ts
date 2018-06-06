import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DangerMessageComponent } from './dangermessage/dangermessage.component';
import { SuccessMessageComponent } from './successmessage/successmessage.component';
import{ WarningMessageComponent } from './warningmessage/warningmessage.component';



@NgModule({
  declarations: [
    AppComponent,
    DangerMessageComponent,
    SuccessMessageComponent,
    WarningMessageComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
