import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent } from 'src/app/@AppService/models/event';
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
  filterBy: string = 'all'
  sortBy: string = 'votes'

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.data.forEach((data: any) => {
      this.event = data['event']
      this.addMode = false;
    })
    //   this.activatedRoute.params.forEach((params:Params)=>{
    //     this.eventService.getEvent(+params['id']).subscribe((event:IEvent)=>{
    //      this.event =event;
    //      this.addMode = false;
    //    })
    //  })
    // this.id = +this.activatedRoute.snapshot.params['id'];
    // this.event = this.eventService.getEvent(+this.id )

  }

  addSession() {
    this.addMode = true;
  }

  addNewSession(newSession: ISession) {
    const nextId = Math.max.apply(null, this.event?.sessions?.map((s: any) => s.id))
    newSession.id = nextId + 1;
    this.event?.sessions.push(newSession);
    this.eventService.saveEvent(this.event).subscribe(() => this.addMode = false)


    console.log({ newSession });
  }

  cancelAddSession() {
    this.addMode = false;

  }

}
