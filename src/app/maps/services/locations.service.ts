import { Injectable, NgZone } from "@angular/core";
import { Marker } from "../../core/models/markers";
import { MapsService } from "./maps.service";
import {} from "googlemaps";
import { MapsAPILoader, GoogleMapsAPIWrapper, AgmMap } from "@agm/core";

@Injectable({ providedIn: "root" })
export class LocationsService {
  mrkers: google.maps.Marker;
  lat: number;
  lng: number;
  location: any;
  locations: any = [];
  mkrs: any = [];
  service: any;
  markers: Marker[];

  constructor(private ngZone: NgZone, private wrapper: GoogleMapsAPIWrapper, private mapService: MapsService) {}

  getLocations(map: any) {
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location: {
          lat: this.mapService.lat,
          lng: this.mapService.lng
        },
        radius: 1000,
        keyword: "dog parks"
      },
      (result, status, pagnination) => {
        if (status == google.maps.places.PlacesServiceStatus.OK)
          this.locations = result;
        console.log(this.locations);
        for (let i = 0; i < this.locations.length; i++) {
          this.locations.push({
            placeId: this.locations[i].place_id
          });
          this.createMarker(this.locations, map);
          console.log(this.locations);
        }
      }
    );
  }

  createMarker(data, map: any) {
    let service = new google.maps.places.PlacesService(map);
    service.getDetails(
      {
        placeId: data.placeId
      },
      (result, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) return;
        let marker = new google.maps.Marker({
          map: map,
          place: {
            placeId: data.placeId,
            location: result.geometry.location
          },
          position: result.geometry.location,
          title: result.name
        });
        this.mkrs.push(marker);
      }
    );
  }

  m: Marker[] = [];

  getMarkers() {
    return this.m;
  }
}
