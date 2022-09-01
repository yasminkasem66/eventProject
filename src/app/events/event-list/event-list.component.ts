import { IEvent } from './../../@AppService/models/event';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { EventService } from 'src/app/@AppService/services/event.service';
import { ToastrService } from 'src/app/@AppService/services/toastr.service';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events!: IEvent[];
  constructor(private eventService: EventService, private toastrService: ToastrService ,private activatedRoute:ActivatedRoute) { }

  onClicked(event: any) {
    console.log('event', event);
  }
  ngOnInit(): void {
    // remove this cuz was handled in resolver service
    // this.eventService.getEvents().subscribe((events) => {
    //   this.events = events
    // })

    this.events=this.activatedRoute.snapshot.data['events']
  }

  toaster(name: any) {
    this.toastrService.success(name, "Jas")

  }
}
