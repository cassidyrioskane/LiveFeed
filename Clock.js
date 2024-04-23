//formats and displays the current date, day of the week and time
class Clock
{
	//parameters are the DOM elements that display the different parts of the date/time:
	//tEl: current time
	//mEl: month and date
	//wEl: day of the week
	constructor(tEl,mEl,wEl)
	{
		this.timeElement = tEl;
		this.monthAndDayElement = mEl;
		this.weekdayElement = wEl;
		this.currentDate = new Date();
		this.currentTime;
		this.currentMonthAndDay;		
		this.currentWeekday;
		
		this.updateClock();
		//bind "this" to the update handler so it refers to this class rather than the context in 
		//which it's implemented
		this.updateCallback = this.handleUpdate.bind(this);
	}

	//gets and formats the current date/time 
	updateClock() 
	{
		this.currentDate = new Date();
		this.currentTime = this.formatTime(this.currentDate);
		this.currentMonthAndDay = this.formatMonthAndDay(this.currentDate);		
		this.currentWeekday = this.formatWeekday(this.currentDate);
	}
	
	//used as callback in the update interval in Main.js
	handleUpdate()
	{
		this.updateClock();
		this.renderData();
	}

	//gets the month and date numbers from the desired date obj
	//converts them to a string in MM/DD format
	formatMonthAndDay(d)
	{
		let tMonth = d.getMonth() + 1;
		let tDay = d.getDate();
		return tMonth + "/" + tDay;
	}
	
	//formats the time, converting it from military time and adding 
	//an AM or PM
	formatTime(d)
	{
		let tHour = d.getHours();
		let tMinutes = d.getMinutes();
		let AmPm;
		
		if (tHour > 12)
		{
			AmPm = "PM";
			tHour -= 12;
		}
		else
			AmPm = "AM";
		
		//puts a zero in front of single-digit minutes
		if (tMinutes < 10)
		{
			tMinutes = 0 + tMinutes.toString();
		}
		
		return tHour + ":" + tMinutes + " " + AmPm;
	}
	
	//changes the weekday from an int to the name of the day
	formatWeekday(d)
	{
		let dayNumber = d.getDay();
		let day;
		switch (dayNumber)
		{
			case 0:
				day = "Sunday";
				break;
			case 1:
				day = "Monday";
				break;
			case 2:
				day = "Tuesday";
				break;
			case 3:
				day = "Wednesday";
				break;
			case 4: 
				day = "Thursday";
				break;
			case 5:
				day = "Friday";
				break;
			case 6:
				day = "Saturday";
				break;
		}
		return day;
	}	
	
	//render the end result to the target DOM elements
	renderData()
	{
		this.timeElement.innerHTML = this.currentTime;
		this.monthAndDayElement.innerHTML = this.currentMonthAndDay;
		this.weekdayElement.innerHTML = this.currentWeekday;
	}
}