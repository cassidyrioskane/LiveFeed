<?php
	//this method is called on the first request for new ticket data in the 
	//app's lifecycle
	function getData()
	{
		return 	
		[
			[
				"ticketId"=> 36703,
				"dateIssued"=>"10/16/2019 18:10:58",
				"subject"=>"Fake Event Coordinators - Feedback Request ",
				"clientEmail"=>"jenna@fakeevents.org"
			],
			[
				"ticketId"=> 36704,
				"dateIssued"=>"11/02/2019 13:10:58",
				"subject"=>"Made Up Books - Support Request ",
				"clientEmail"=>"dean@madeup.com"
			]
		];
	}
	
	//this set of seed data is for mock updates. after a set interval, the app replaces the 
	//original data (from getData()) with this set
	function getUpdatedData()
	{
		return 
		[
			[
				"ticketId"=> 36703,
				"dateIssued"=>"10/16/2019 18:10:58",
				"subject"=>"Fake Event Coordinators - Feedback Request",
				"clientEmail"=>"jenna@fakeevents.org"
			],
			[
				"ticketId"=> 36704,
				"dateIssued"=>"11/02/2019 13:10:58",
				"subject"=>"Made Up Books - Support Request",
				"clientEmail"=>"dean@madeup.com"
			],
			[
				"ticketId"=> 36706,
				"dateIssued"=>"11/05/2019 03:10:58",
				"subject"=> "Fabricated Solutions - New Ticket",
				"clientEmail"=>"emily@laneeventscenter.org"
			],
			[
				"ticketId"=> 36709,
				"dateIssued"=>"11/06/2019 03:10:58",
				"subject"=> "Imaginary Alehouse - New Ticket",
				"clientEmail"=>"emily@laneeventscenter.org"
			]
		];
	}
?>