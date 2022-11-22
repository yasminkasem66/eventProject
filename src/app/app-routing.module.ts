import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsDeactivateGuard } from './events/create-event/event-details-deactivate.guard';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventDetailsGuard } from './events/event-details/event-details.guard';
import { EventResolveer } from './events/event-details/event-resolver.service';
import { EventListREsolveer } from './events/event-list/event-list-resolve.service';
import { EventListComponent } from './events/event-list/event-list.component';

const routes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: [EventDetailsDeactivateGuard]
  },
  {
    path: "events/session/new",
    component: CreateSessionComponent,
   },
  // before resolving this route  call this  EventListREsolveer and when that resolver finishes and return us some data add this data to the route as property named events 
  {
    path: "events",
    component: EventListComponent,
    resolve: { events: EventListREsolveer }
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    resolve:{ event: EventResolveer } 
  },
  {
    path: 'user',
    // dynamic import
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: "404",
    component: Error404Component
  },
  {
    path: "**",
    redirectTo: 'events',
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  // {
  //   path: "events/:id",
  //   component: EventDetailsComponent,
  //   canActivate: [EventDetailsGuard]
  // },