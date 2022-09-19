import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
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
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionlistComponent } from './events/sessionlist/sessionlist.component';
import { CollapsibleComponent } from './common/collapsible/collapsible.component';
import { DurationPipe } from './common/duration.pipe';
import { Toastr, TOASTR_TOKEN } from './@AppService/services/toastr.service';
import { ImpleModalComponent } from './common/imple-modal/imple-modal.component';
import { JQ_TOKEN } from './@AppService/services/jQ.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/upvote/upvote.component';
import { LocationvalidatorDirective } from './events/create-event/locationvalidator.directive';
import { HttpClientModule } from '@angular/common/http';


let toastr: Toastr = window['toastr'];
// declare let toastr: Toastr;
let JQuery = window['$'];

@NgModule({
  declarations: [
    EventAppComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionlistComponent,
    CollapsibleComponent,
    DurationPipe,
    ImpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationvalidatorDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  exports: [ModalTriggerDirective],
  providers: [
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: JQuery
    }
  ],
  bootstrap: [EventAppComponent],
})
export class AppModule { }

// in routes
// {
//   path: "events/new",
//   component: CreateEventComponent,
//   canDeactivate:['canDeactivateCreateEvent']
// },
// in module
// {
  //   provide: 'canDeactivateCreateEvent',
  // useValue: checkDirtyState
// }
// export function checkDirtyState(Component: CreateEventComponent) {
//   if (Component.isDirty) {
//     return window.confirm('you have not save this event, do you want to cancel?')

//   }
//   return true
// }
