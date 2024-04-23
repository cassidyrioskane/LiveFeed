<?php 
include "staff-model.php";
include "staff-seed-data.php";

init();  

//sets the Content-Type header to specify that the result is json
//uses live data sent via the POST request or seed data depending on the value of "isLive".
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
//then returns them in an array
function createModels($responseData)
{
	$models = array();
	foreach ($responseData as $staff)
	{
		$model = new StaffModel($staff);
		array_push($models,$model);
	}
	return $models;
}	