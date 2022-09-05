import { IEvent } from './../../@AppService/models/event';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event!: IEvent;
  @Output() eventClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClickMe() {
    this.eventClick.emit('clicked');
  }

}
