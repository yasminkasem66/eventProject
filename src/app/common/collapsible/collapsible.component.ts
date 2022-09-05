import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
 @Input() title !:string;
   visible :boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  
  toggleContent(){
    this.visible=! this.visible;
  }
}
