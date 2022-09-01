import { Component, Input, OnInit } from '@angular/core';
import { ISession } from 'src/app/@AppService/models/sessions';

@Component({
  selector: 'app-sessionlist',
  templateUrl: './sessionlist.component.html',
  styleUrls: ['./sessionlist.component.scss']
})
export class SessionlistComponent implements OnInit {

  @Input() sessions!:ISession[];

  constructor() { }

  ngOnInit(): void {
  }

}
