import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/event-list/event-list.component';

const routes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent
  },
  {
    path: "events",
    component: EventListComponent
  },
  {
    path: "events/:id",
    component: EventDetailsComponent
  },
  {
    path: "**",
    redirectTo:'events',
    pathMatch:'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
