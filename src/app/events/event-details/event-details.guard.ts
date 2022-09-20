import { EventService } from 'src/app/@AppService/services/event.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// not used
export class EventDetailsGuard implements CanActivate {
  constructor(private eventService: EventService,
    private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const eventExist = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExist) {
      this.router.navigate(['/404'])
     }
    return eventExist;
  }

}
