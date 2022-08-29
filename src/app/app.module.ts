import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './event-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { NavComponent } from './nav/nav.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [BrowserModule, AppRoutingModule ,RouterModule],
  providers: [],
  bootstrap: [EventAppComponent],
})
export class AppModule {}
