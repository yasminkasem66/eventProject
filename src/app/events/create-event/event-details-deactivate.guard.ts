import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEventComponent } from './create-event.component';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsDeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: CreateEventComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isDirty) {
      return window.confirm('you have not save this event, do you want to cancel?')

    }
    return true
  }

}
