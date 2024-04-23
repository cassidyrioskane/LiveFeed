class TableRow 
{
	//data obj is a new ticket model
	constructor(dataObj)
	{
		this.dataObject = dataObj;
		this.dataType;
		this.trElement;
		this.init();
	}
	
	//checks which type of row to create (staff or ticket)
	//creates a <TR> using the dataObject passed in the constructor 
	init()
	{
		if (this.dataObject.type === "staff")
		{
			this.dataType = "staff";
			this.trElement = this.createStaffRow(this.dataObject);
		}
		else if (this.dataObject.type === "ticket")
		{
			this.dataType = "ticket";
			this.trElement = this.createTicketRow(this.dataObject);
		}
	}
	
	//creates a staff <TR> and its child <TD>s, setting styles 
	//and innerHTML values
	createStaffRow(staffObj)
	{
		let staffTr = document.createElement("tr");
		let staffNameTd = document.createElement("td");
		let clientNameTd = document.createElement("td");

		staffTr.id = staffObj.staffId;
		staffNameTd.innerHTML = staffObj.name;
		staffNameTd.classList.add("staffName");
		staffTr.appendChild(staffNameTd);
		staffTr.appendChild(clientNameTd);
		this.setStaffRowClass(staffObj,staffTr);
		return staffTr;
	}

	//uses the value of the staff model's location attribute to assign a 
	//background color if the staff member is with a client, sets the 
	//text for row's second <TD> to display the client name
	setStaffRowClass(staffObj,row)
	{
		row.className = "";
		switch (staffObj.currentLocation)
		{
			case "c":
				row.classList.add("withClientRow");
				row.children[1].innerHTML = staffObj.clientName;
				break;
			case "o":
				row.classList.add("outOfOfficeRow");
				row.children[1].innerHTML = "Out of office";
				break;
			case "i":
				row.classList.add("inOfOfficeRow");
				row.children[1].innerHTML = "In office";
				break;
		}
	}
	
	//creates a staff <TR> and its child <TD>s, setting styles 
	//and innerHTML values
	createTicketRow(ticketObj)
	{
		let ticketTr = document.createElement("tr");
		let dateTimeTd = document.createElement("td");
		let subjectTd = document.createElement("td");
		let clientEmailTd = document.createElement("td");

		ticketTr.id = ticketObj.ticketId;
		dateTimeTd.innerHTML = ticketObj.dateIssued;
		subjectTd.innerHTML = ticketObj.subject;
		clientEmailTd.innerHTML = ticketObj.clientEmail;
		
		ticketTr.className = "row border-bottom";
		dateTimeTd.className = "ticketTime col-3 text-truncate";
		subjectTd.className = "col text-truncate";
		clientEmailTd.className = "col-4 text-left";
		
		ticketTr.appendChild(dateTimeTd);
		ticketTr.appendChild(subjectTd);
		ticketTr.appendChild(clientEmailTd);
		return ticketTr;
	}
	
	//the "public" function that returns the finished row
	getRow()
	{
		return this.trElement;
	}
}

