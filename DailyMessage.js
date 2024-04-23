//stores, retrieves and renders messages entered into a textArea element 
class DailyMessage
{
	//the target textArea element
	constructor(targetElement)
	{
		this.textArea = targetElement;
		//date strings are used as the message ids to ensure that a message 
		//won't persist for longer than a day
		this.today = new Date();
		this.yesterday = new Date(this.today.getDate()-1);
		this.todayMessageId;
		this.yesterdayMessageId;
		this.messageContents;
		
		//get the message ids for today and yesterday
		this.yesterdayMessageId = this.getMessageId(this.yesterday);
		this.todayMessageId = this.getMessageId(this.today);
		//get today's message from local storage
		this.messageContents = localStorage.getItem(this.todayMessageId);
		
		//delete yesterday's message if there is one
		if (localStorage.getItem(this.yesterdayMessageId) != null)
			localStorage.removeItem(this.yesterdayMessageId);
		//display today's message if one has already been stored
		if (this.messageContents != null)
			this.textArea.value = this.messageContents;
	}
	
	//create a date string from the given date object
	getMessageId(day) 
	{ 
		return day.getMonth().toString() + 
			   day.getDate().toString() +
			   day.getFullYear().toString();
	}
	
	//handles the target textArea's "change" event
	//puts the message in local storage, using a string of the current date as an id
	updateMessage()
	{
		this.messageContents = this.textArea.value;
		if (this.messageContents.length > 0)
			localStorage.setItem(this.getMessageId(this.today),this.textArea.value);
	}
}





