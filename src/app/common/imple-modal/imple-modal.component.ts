import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './imple-modal.component.html',
  styleUrls: ['./imple-modal.component.scss']
})
export class ImpleModalComponent implements OnInit {

  @Input() title!:string
  constructor() { }

  ngOnInit(): void {
  }

}
