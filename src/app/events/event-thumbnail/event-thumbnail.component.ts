import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClickMe() {
    this.eventClick.emit('clicked');
  }

  logFoo(){
  console.log("ggg");
  
  }
}
