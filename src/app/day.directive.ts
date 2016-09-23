import { Directive, Input, AfterContentInit} from '@angular/core';
import { Time } from './time';

@Directive({
  selector: 'day'
})
export class Day implements AfterContentInit{

  @Input('startTime')
  startTimeNum : number;

  startTime : Time = new Time(0);

  @Input('endTime')
  endTimeNum : number;

  endTime : Time = new Time(0);

  @Input()
  name : string;

  constructor() { }

  ngAfterContentInit() {
  	this.startTime.convertFromString(this.startTimeNum);
  	this.endTime.convertFromString(this.endTimeNum);
  }
}
