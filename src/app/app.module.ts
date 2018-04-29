import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Angular Google Maps Module
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
			apiKey: 'AIzaSyC_bCU2Fz5mlDtXKNPUkOt9WXKV0NS6Bmg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
