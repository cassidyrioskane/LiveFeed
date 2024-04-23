<?php
class StaffModel
{
	//$sData is the staff data object received from the intranet server or seed data
	function __construct($sData)
	{
		$this->type = "staff";
		$this->staffId = $sData['staffId'];
		$this->name = $sData['name'];
		//"c" for with client, "o" for out of office, "i" for in office
		$this->currentLocation = $sData['currentLocation'];
		$this->clientName = $sData['clientName'];
	}
	
}