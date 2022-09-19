import { Component, Input, OnInit, ElementRef, Inject, ViewChild } from '@angular/core';
import { JQ_TOKEN } from 'src/app/@AppService/services/jQ.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './imple-modal.component.html',
  styleUrls: ['./imple-modal.component.scss']
})
export class ImpleModalComponent implements OnInit {

  @Input() title!: string
  @Input() elementId!: string
  @Input() closeOnBodyClick!: string
  @ViewChild('modalcontainer') modalcontainer: ElementRef;
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit(): void {
  }

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() == 'true') {
      this.$(this.modalcontainer.nativeElement).modal('hide')
    }
  }
}


