import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({ providedIn: 'root' })
export class MapsService {

  public lat: number;
  public lng: number;
  public zoom: number = 8;

  public newCoordinators = new Subject();

  public openWindow = new Subject();

  constructor() { }

}
