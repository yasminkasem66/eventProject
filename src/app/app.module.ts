import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './event-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventListComponent } from './events/event-list/event-list.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventThumbnailComponent,
    EventListComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [EventAppComponent],
})
export class AppModule {}
