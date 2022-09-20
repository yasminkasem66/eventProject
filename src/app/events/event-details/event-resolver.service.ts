import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,   Resolve, Router, RouterStateSnapshot } from '@angular/router';
 import { EventService } from 'src/app/@AppService/services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolveer implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // cuz we return the events in map fun so these events will get passed along to the component defined in our route 
    // a resolver autometically subscribes to an observable we don't have to make a subscribe call
    return this.eventService.getEvent(+route.params['id'])
  }


}
