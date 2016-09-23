import { Component, QueryList, ContentChildren, AfterContentInit} from '@angular/core';
import { Day } from '../day.directive';
import { Timeslot } from '../timeslot';
import { Time } from '../time';

const INTERVAL: number = 60;

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements AfterContentInit{

  startTime: Time = new Time(1440);
  endTime: Time = new Time(0);
  intervals: number = 0;
  timeslots: Timeslot[] = [];
  workSlots: Timeslot[] = [];

  @ContentChildren(Day)
  days: QueryList<Day>;

  ngAfterContentInit() {
    this.days.forEach(day => {
    	this.startTime.setTime(day.startTime.lessThan(this.startTime) ? day.startTime.absoluteTime : this.startTime.absoluteTime);
  		this.endTime.setTime(this.endTime.lessThan(day.endTime)? day.endTime.absoluteTime : this.endTime.absoluteTime);
  		this.intervals = (this.endTime.difference(this.startTime)) / INTERVAL;
    });
    for (let i : number = 0; i < this.intervals; i++) {
    	this.timeslots.push(new Timeslot({fromTime: this.startTime.add(INTERVAL * i), toTime: this.startTime.add(INTERVAL * (i + 1)), timeDuration: INTERVAL}));
    }
  }

}