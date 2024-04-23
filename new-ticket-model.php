<?php
class NewTicketModel
{
	//$tData is a JSON data object from live or seed data
	function __construct($tData)
	{
		$this->type = "ticket";
		$this->ticketId = $tData['ticketId'];
		$this->dateIssued = $tData['dateIssued'];
		$this->subject = $tData['subject'];
		$this->clientEmail = $tData['clientEmail'];
	}
	
}