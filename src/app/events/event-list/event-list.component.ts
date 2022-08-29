import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/@AppService/services/event.service';
import { ToastrService } from 'src/app/@AppService/services/toastr.service';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events:any;
  constructor(private eventService:EventService,private toastrService:ToastrService) {}

  onClicked(event:any) {
    console.log('event', event);
  }
  ngOnInit(): void {
   this.events= this.eventService.getEvents()
  }

  toaster(name:any){
   this.toastrService.success(name,"Jas")
 
  }
}
