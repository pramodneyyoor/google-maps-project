import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'Google Maps Project';
  //variables for storing the latitude and longitude
  lat: number = 51.678418;
  lng: number = 7.809007;
  
  ngOnInit(): void { 
        this.findMe(); 
      } 

//Method to find the location of the user from the browser
  findMe() : void { 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {  
        this.lat= position.coords.latitude;
        this.lng= position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
