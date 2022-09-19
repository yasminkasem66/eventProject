import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/@AppService/services/auth.service';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {

  // @Input()   voted !: boolean
  @Input() set voted(val: any){
    this.iconColor=val?'red':'white'
  }
  @Input() count!: number
  @Output() vote = new EventEmitter()
  iconColor:string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.vote.emit({})
  }
}
