export class Time {
	hour : number;
	minutes : number;
	absoluteTime : number;

	constructor(absTime) {
		this.absoluteTime = absTime;
		this.hour = Math.floor(absTime / 60);
		this.minutes = absTime - this.hour * 60;
	}

	difference( other ) {
		return Math.abs(this.absoluteTime - other.absoluteTime);
	}

	lessThan ( other ) {
		return this.absoluteTime < other.absoluteTime;
	}

	setTime ( absTime ) {
		this.absoluteTime = absTime;
		this.hour = Math.floor(absTime / 60);
		this.minutes = absTime % 60;
	}

	convertFromString ( timeInString ) {
		console.log('converting from string : ' + timeInString);
		this.hour = Math.floor(+timeInString / 100);
		this.minutes = +timeInString - this.hour * 100;
		this.absoluteTime = this.hour * 60 + this.minutes;
		console.log(this.toString());
	}

	toString() {
		return this.hour + ':' + (this.minutes == 0 ? '00' : this.minutes);
	}

	add ( absTime ) {
		return new Time(this.absoluteTime + absTime);
	}
}
