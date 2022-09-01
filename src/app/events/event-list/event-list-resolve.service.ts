import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,   Resolve, Router, RouterStateSnapshot } from '@angular/router';
 import { EventService } from 'src/app/@AppService/services/event.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListREsolveer implements Resolve<any> {
  constructor(private eventService: EventService,
    private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // cuz we return the events in map fun so these events will get passed along to the component defined in our route 
    return this.eventService.getEvents().pipe(map(events=>events))
  }


}
