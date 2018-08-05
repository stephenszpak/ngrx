import { Injectable } from '@angular/core';
import { Marker } from '../../core/models/markers';
import { AgmMarker } from '../../../../node_modules/@agm/core/directives/marker';
import { MapsService } from './maps.service';
import { } from 'googlemaps';

@Injectable({ providedIn: 'root' })
export class LocationsService {
  lat: number;
  lng: number;
  mapOptions = {};
  locationList: Array<any> = [];


  markerz: Marker[];

  constructor(private mapsService: MapsService) { }

  initialize() {
    let bounds = new google.maps.LatLngBounds();
    let map;
    let radius = 1000;

    let center = new google.maps.LatLng(this.lat, this.lng),
      mapOptions = {
        center: center,
        zoom: 12,
        scrollwheel: false
      };

      this.setMarkers(center, radius, map);

  }

  setMarkers(center, radius, map) {
    let service = new google.maps.places.PlacesService(map);
    service.textSearch({
      location: {
        lat: this.lat,
        lng: this.lng
      },
      radius: radius,
      query: "dog parks"
    }, (res, status, pagnation) => {
      let locations;
      locations = res;
      for (let i = 0; i < locations.length; i++) {
        this.locationList.push({
          "placeId": locations[i].place_id
        });
      }
    });
    console.log(this.locationList);
  }

  createMarker(data, map) {
    let service = new google.maps.places.PlacesService(map);

  }


  markers: Marker[] = [
    {
      lat: 43.678418,
      lng: -79.809007,
      title: 'Aasdfa3265236sdfhshfasdf',
      icon: 'https://www.ftsgps.com/wp-content/uploads/2017/05/icon-location-100.png',
      draggable: false,
      street: '123 Yonge Street',
      city: 'Toronto',
      state: 'ON',
      postalcode: '75201',
      email: 'test@example.com',
      phone: '111-111-1111',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    },
    {
      lat: 43.678418,
      lng: -80.809007,
      title: 'B',
      icon: 'https://www.ftsgps.com/wp-content/uploads/2017/05/icon-location-100.png',
      draggable: false,
      street: '123 Yonge Street',
      city: 'Toronto',
      state: 'ON',
      postalcode: '75201',
      email: 'test@example.com',
      phone: '111-111-1111',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    },
    {
      lat: 43.978418,
      lng: -78.809007,
      title: 'C',
      icon: 'https://www.ftsgps.com/wp-content/uploads/2017/05/icon-location-100.png',
      draggable: false,
      street: '2222 McKinney Ave Suite 120',
      city: 'Toronto',
      state: 'ON',
      postalcode: '75201',
      email: 'test@example.com',
      phone: '111-111-1111',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    }
  ];


  getMarkers() {
    return this.markers;
  }

}
