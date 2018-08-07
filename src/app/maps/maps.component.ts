import { Component, OnInit } from "@angular/core";
import { MapsAPILoader, MouseEvent, GoogleMapsAPIWrapper } from "@agm/core";
import { Marker } from "../core/models/markers";
import { LocationsService } from "./services/locations.service";
import { MapsService } from "./services/maps.service";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"]
})
export class MapsComponent implements OnInit {
  public lat: number;
  public lng: number;
  public zoom: number;
  public query: string;
  public loading = false;
  public openedWindow: number;

  public markers: Marker[] = this.locationService.getMarkers();

  constructor(
    private locationService: LocationsService,
    private mapApiLoader: MapsAPILoader,
    private mapsService: MapsService,
    public mapApiWrapper: GoogleMapsAPIWrapper
  ) {}

  ngOnInit() {
    this.setCurrentPosition();
    this.loading = true;
    this.mapApiLoader.load();

    // Zoom to new location after search
    this.mapsService.newCoordinators.subscribe(
      (coords: { lat: number; lng: number; zoom: number }) => {
        if (coords) {
          this.lat = coords.lat;
          this.lng = coords.lng;
          this.zoom = coords.zoom;
          this.mapApiLoader.load();
        }
      }
    );

    // Open window after click on panel
    this.mapsService.openWindow.subscribe(index => {
      this.openedWindow = +index;
    });
  }

  mapReady(event: any) {
  }

  mapClicked($event: MouseEvent) {
    console.log($event);
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`Clicked the marker: ${label || index}`);
    this.openedWindow = index;
  }

  private setCurrentPosition() {

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.loading = false;

        this.lat = this.mapsService.lat = position.coords.latitude;
        this.lng = this.mapsService.lng = position.coords.longitude;
        this.zoom = 10;
      });
    }
    // TODO: add locations via locations service
  }

  isInfoWindowOpen(index: number) {
    return this.openedWindow === index;
  }
}
