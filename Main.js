//table elements
const STAFF_TABLE_BODY = document.getElementById("staffTable");
const TICKET_TABLE_BODY = document.getElementById("ticketTable");
// Ticket count elements
const INACTIVE_TICKET_DIV = document.getElementById("inactive");
const PAST_DUE_TICEKT_DIV = document.getElementById("pastDue");
// Clock elements
const TIME_SPAN = document.getElementById("time");
const MONTH_AND_DAY_SPAN = document.getElementById("monthAndDay");
const WEEKDAY_SPAN = document.getElementById("weekday");
// Daily message element
const DAILY_MESSAGE_TEXT_AREA = document.getElementById("dailyMessage");

//main initialization for the app
//retrieves, creates and sets intervals to update all necessary data
(function ()
{
	//initializes the clock and daily message features
	initClock();
	initDailyMessage();
	
	//requests ticket data and displays the current counts for 
	//inactive and past due tickets
	renderTicketCount(false);
	
	//creates the tables with corresponding async promises
	let ticketTableCreated = createTable("ticket",false);
	let staffTableCreated = createTable("staff",false);
	
	//instantiates TableAnimation objects for each table
	let ticketAnimator = new TableAnimation(TICKET_TABLE_BODY);
	let staffAnimator = new TableAnimation(STAFF_TABLE_BODY);
	
	//starts the table animations after the tables are created
	ticketTableCreated.then(()=>
	{
		ticketAnimator.startAnimation();
	});	
	staffTableCreated.then(()=>
	{
		staffAnimator.startAnimation();
	});
	
	//handle the animations' response to window resizing
	window.addEventListener("resize",()=>
	{
		ticketAnimator.resizeCallback();
		staffAnimator.resizeCallback();
	});
	
	//automatically updates the ticket counts and tables every 60 seconds
	setInterval(()=>
	{
		updateTable("ticket",ticketAnimator);
		updateTable("staff",staffAnimator);
		renderTicketCount(true);
	},60000);
	
})();

//creates a Clock object, renders the current time to the view 
//and starts an interval to update the time every second
function initClock()
{
	let clock = new Clock(TIME_SPAN,MONTH_AND_DAY_SPAN,WEEKDAY_SPAN);
	window.setInterval(clock.updateCallback,1000);
}

//creates a daily message obj. adds a change listener to the message's text area,
//updating the message when its contents change
function initDailyMessage()
{
	let dailyMessage = new DailyMessage(DAILY_MESSAGE_TEXT_AREA);
	DAILY_MESSAGE_TEXT_AREA.addEventListener("change",()=>
	{
		dailyMessage.updateMessage();
	});
}


//requests data for the specified table. renders the formatted result. 
//first argument can be "ticket" for new tickets or "staff" for staff
//second argument specifies whether the request is for an update
//returns a promise that resolves when table has rendered data
async function createTable(type, isUpdate)
{
	return new Promise(async resolve => 
	{
		let table = (type == "ticket") ? TICKET_TABLE_BODY : STAFF_TABLE_BODY;
		models = await getTableRepo(type, isUpdate);
		rows = createRows(models);
		populateTable(table,rows);
		resolve();		
	});
}

//returns a list of <TR> elements generated from models
function createRows(repo)
{
	let rows = new Array();
	repo.forEach(function(model)
	{
		let row;
		let rowMaker = new TableRow(model);
		row = rowMaker.getRow();
		rows.push(row);
	});
	return rows;
}

//clears the table and adds the rows passed as an 
//argument to the specified table body
function populateTable(table,rows)
{
	clearTable(table);
	for (let i in rows)
	{				
		let row = rows[i];
		table.appendChild(row);
	}
}

//removes every row from the specified <tbody>
function clearTable(table)
{
	while (table.rows != undefined && table.rows.length > 0)
		table.deleteRow(0);
}

//queries the intranet server for data. if the query fails,
//sends a post query to the new ticket or staff controller depending on 
//the value of the "type" argument (can be "staff" or "ticket"). 
//specifies whether the the request is for "updated" seed data data.
//returns a repo object with a list of data models.
async function getTableRepo(type,isUpdate)
{
	return new Promise(async resolve=>
	{		
		let models;
		let liveData = await requestLiveTableData(type);
		if (!liveData)
			models = await requestTableSeedData(type,isUpdate);
		else
			models = await formatLiveTableData(type,liveData);
		resolve(models);
	});
}

//queries the intranet server using the route for the specified type. 
//returns a resolved promise containing either response data if the 
//query succeeds or false if the query fails
async function requestLiveTableData(type)
{
	return new Promise(resolve =>
	{
		let liveRoute = (type == "ticket") ? 'https://example.com/endpointfortickets' : 'https://example.com/endpointforstaff';
		$.get(liveRoute,
		response => 
		{
			resolve(response);
		}).catch(error =>
		{
			resolve(false);
		});
	});
}

//sends a post request to the new ticket or staff controller
//post data contains the result of the live data request
//and a boolean that specifies the data source
//returns a promise that resolves when the response is received 
async function formatLiveTableData(type,data)
{
	return new Promise(resolve => 
	{
		let route = (type == "ticket") ? 'new-ticket-controller.php' : 'staff-controller.php';
		$.post(route,
		{
			"isLive" : true,
			"data" : data
		},
		response => 
		{
			resolve(response);
		});
	});
}

//sends a post request to the corresponding controller 
//isUpdate specifies whether the controller should use the first or
//second set of data, simulating an update of server side data
//returns a promise that resolves with the response data if the request succeeds
async function requestTableSeedData(type,isUpdate)
{
	return new Promise(resolve=>
	{		
		let route = (type == "ticket") ? 'new-ticket-controller.php' : 'staff-controller.php';
		
		$.post(route, 
		{
			"isUpdate" : isUpdate,
			"isLive" : false,
		},
		response =>
		{
			resolve(response);
		}).catch(error=>
		{
			console.log(error);
		});
	});
}

//handler for the automatic update interval
//pauses the table's animation, rebuilds the table 
//from current data source and updates the animation's status
function updateTable(type,animator)
{
	animator.animationEnabled = false;
	let tableUpdated = createTable(type,true);
	tableUpdated.then(()=>
	{
		setTimeout(()=>
		{
			animator.animationEnabled = true;
			animator.updateAnimationStatus();
		},2000);
	});	
}

//determines whether to use seed data or server data, using the same logic
//as getTableRepo. Returns a promise that resolves with an object 
//containing the counts for inactive and past due tickets when the function 
//that queries for data has resolved. 
async function getTicketCount(isUpdate)
{
	return new Promise(async resolve=>
	{		
		let counts;
		let liveData = await requestLiveTicketCountData();
		if (!liveData)
			counts = await requestTicketCountSeedData(isUpdate);
		else
			counts = await formatLiveTicketCountData(liveData);
		resolve(counts);
	});
}

//sends a post query to the ticket count controller
//specifying the source as seed data and whether the
//request is for "updated" data. returns a promise that resolves 
//when request data's received 
async function requestTicketCountSeedData(isUpdate)
{
	return new Promise(resolve =>
	{
		$.post('ticket-count-controller.php', 
		{
			"isUpdate" : isUpdate,
			"isLive" : false
		},
		response =>
		{
			resolve(response);
		}).catch(error=>
		{
			console.log(error);
		});	
	});
}

//sends a get request to the intranet server.
//returns a resolved promise with the response on success, 
//and the bool value false on failure
async function requestLiveTicketCountData()
{
	return new Promise(resolve =>
	{
		$.get('https://example.com/endpointforticketcount',
		response =>
		{
			resolve(response);
		}).catch(error =>
		{
			resolve(false);
		});
	});
}

//uses a post request to send live data to the ticket count
//controller. returns the formatted data as json object in the form 
//of a resolved promise
async function formatLiveTicketCountData(data)
{
	return new Promise(resolve => 
	{
		$.post('ticket-count-controller.php',
		{
			"isLive" : true,
			"data" : data
		},
		response => 
		{
			resolve(response);
		}).catch(error=>
		{
			console.log(error);
		});
	});
}

//waits for getTicketCount() to resolve then renders the
//formatted data to the ticket count divs
async function renderTicketCount(isUpdate)
{
	let ticketCount;
	ticketCount = await getTicketCount(isUpdate);
	INACTIVE_TICKET_DIV.innerHTML = ticketCount.inactive;
	PAST_DUE_TICEKT_DIV.innerHTML = ticketCount.pastDue;
}