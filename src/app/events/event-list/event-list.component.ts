import { IEvent } from './../../@AppService/models/event';
import { Component, Input, OnInit ,Inject } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { EventService } from 'src/app/@AppService/services/event.service';
import { Toastr, TOASTR_TOKEN } from 'src/app/@AppService/services/toastr.service';
// import { ToastrService } from 'src/app/@AppService/services/toastr.service';
// private toastrService: ToastrService ,
@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events!: IEvent[];
  constructor(private eventService: EventService, private activatedRoute:ActivatedRoute ,
    @Inject(TOASTR_TOKEN) private toastr:Toastr  ) { }

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
     this.toastr.success(name,'xxx')
  }
}
