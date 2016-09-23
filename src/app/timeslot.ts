import { Time } from './time';
import { Day } from './day.directive';

export class Timeslot {
	owner: string = 'self';
	fromTime: Time = null;
	toTime: Time = null;
	day: Day = null;
	timeDuration: number = 0;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}

}
