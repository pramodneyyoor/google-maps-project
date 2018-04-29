# GoogleMapsProject

## Documentation: https://angular-maps.com/guides/getting-started/

## 1. Install angular CLI
	npm install -g @angular/cli

## 2. Create an Angular Project
	ng new google-maps-project
	cd google-maps-project
	
## 3. Install Google Angular Maps
	npm install @agm/core --save
	
## 4. Get Goolge Maps API Key --> https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key

## 5. Configure NgModule
	import { AgmCoreModule } from '@agm/core';
	
	imports properties:
		AgmCoreModule.forRoot({
			apiKey: 'YOUR_KEY'
		})
		
## 6. Setup template:
	<agm-map [latitude]="lat" [longitude]="lng">
		<agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
	</agm-map>
	
## 7. Setup CSS
	agm-map {
		height: 300px;
	}
	
## 8. Run the application
	ng serve
	
	
