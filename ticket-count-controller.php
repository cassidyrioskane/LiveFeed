<?php
require 'vendor/autoload.php';
use Carbon\Carbon;
include "ticket-count-seed-data.php";

init();

//sets the header to specify the return value as json,
//determines the data source, interprets the data and 
//returns the counts for inactive and past due tickets
function init()
{
	header('Content-Type: application/json');
	if ($_POST["isLive"] == "true")
		$tickets = $_POST["data"];
	else
		$tickets = ($_POST["isUpdate"] == "true") ? getUpdatedData() : getData();
	print_r(countTickets($tickets));
}

//creates a stdClass object to store the counts for inactive and past due tickets
//iterates through the data objects checking for isActive == 0 (inactive) and
//dueDate is in the past (does not count tickets due the on the current day). 
//returns the stdClass object as JSON.
function countTickets($tickets)
{
	$ticketCount = new stdClass();
	$ticketCount->inactive = 0;
	$ticketCount->pastDue = 0;
	
	foreach ($tickets as $ticket)
	{
		if ($ticket['isActive'] == 0)
			$ticketCount->inactive++;
		if ($ticket['dateDue'] != "")
		{
			$dueDate = Carbon::create($ticket['dateDue']);
			if ($dueDate->isPast() && !$dueDate->isToday())
				$ticketCount->pastDue++;
		}
	}
	
	return json_encode($ticketCount);
}