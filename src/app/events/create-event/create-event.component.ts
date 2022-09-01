import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from 'src/app/@AppService/models/event';
import { EventService } from 'src/app/@AppService/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  event!: any;
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
  }
  saveEvent(formsValue: any) {
    console.log({ formsValue });

    this.eventService.saveEvent(formsValue)
    this.isDirty=false;
    this.router.navigate(['/events'])

  }
  cancel() {
    this.router.navigate(['/events'])
  }

}
