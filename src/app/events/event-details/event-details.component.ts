import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/@AppService/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode!: boolean;

  constructor(private eventService: EventService, private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.activeRoute.snapshot.params['id'])

  }

  addSession() {
    this.addMode = true;
  }

}
