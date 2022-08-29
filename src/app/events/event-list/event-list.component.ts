import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '26/9/2023',
    time: '10:10 Am',
    price: 559,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '132 st,',
      city: 'London',
      country: 'England',
    },
  };
  constructor() {}

  onClicked(event:any) {
    console.log('event', event);
  }
  ngOnInit(): void {}
}
