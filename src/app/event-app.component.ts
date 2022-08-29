import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template: `
  <app-event-list></app-event-list>
  <img src="assets/images/basic-shield.png">
  `,
})
export class EventAppComponent {
  title = 'eventProject';
}
