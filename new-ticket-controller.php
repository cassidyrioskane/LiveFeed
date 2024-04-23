<?php 
require 'vendor/autoload.php';
use Carbon\Carbon;
include "new-ticket-model.php";
include "new-ticket-seed-data.php";

init();  

//checks the isUpdate post data to determine whether to pull original or updated seed data
//gets seed data from a separate php file, formats it then outputs the result
function init()
{
	header('Content-Type: application/json');
	if ($_POST["isLive"] == "true")
		$responseData = $_POST["data"];
	else
		$responseData = ($_POST["isUpdate"] == "true") ? getUpdatedData() : getData();
	
	$models = createModels($responseData);
	print_r(json_encode($models));
}

//iterates through php data objects, converts them to models,
//then returns them in an array. uses Carbon to convert the date/time string
//in the original data to mm/dd/yyyy hh:mm AM/PM format
function createModels($responseData)
{
	$models = array();
	foreach ($responseData as $newTicket)
	{
		$model = new NewTicketModel($newTicket);
		$date = Carbon::create($model->dateIssued);
		$date->setToStringFormat('m/d/Y g:i A');
		$model->dateIssued = (string) $date;
		array_push($models,$model);
	}
	return $models;
}

