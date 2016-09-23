import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css']
})
export class ModalButtonComponent implements OnInit {
  @Input()
  title : string;
  constructor() { }

  ngOnInit() {
  }

}
