import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession } from 'src/app/@AppService/models/sessions';
import { EventService } from 'src/app/@AppService/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  id: any;
  addMode!: boolean;
  filterBy:string='all'
  sortBy:string='votes'

  constructor(private eventService: EventService, private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activeRoute.params.forEach((params:Params)=>{
      this.event = this.eventService.getEvent(+params['id'] )

    })
    // this.id = +this.activeRoute.snapshot.params['id'];
    // this.event = this.eventService.getEvent(+this.id )

  }

  addSession() {
    this.addMode = true;
  }

  addNewSession(newSession: ISession) {
    const nextId = Math.max.apply(null, this.event?.sessions?.map((s: any) => s.id))
    newSession.id = nextId + 1;
    this.event?.sessions.push(newSession);
    this.eventService.updateEvent(this.event)
    this.addMode = false;


    console.log({ newSession });
  }

  cancelAddSession(){
    this.addMode = false;

  }

}
