<?php
//this method is called on the first request for staff data in the 
//app's lifecycle
function getData()
{
	return
	[
		[
		  "staffId"=>2,
		  "name"=>"Alan Murphy",
		  "isClockedIn"=>0,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],
		[
		  "staffId"=>4,
		  "name"=>"Mark Munoz",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>5,
		  "name"=>"Robert Woods",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>6,
		  "name"=>"Dennis Brown",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>7,
		  "name"=>"Albert Ortega",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>8,
		  "name"=>"Judith Sanders",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>9,
		  "name"=>"Louis Arnold",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>9,
		  "name"=>"Mildred Tucker",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>10,
		  "name"=>"Jonathan Wagner",
		  "isClockedIn"=>0,
		  "currentLocation"=>"c",
		  "clientName"=>"Imaginary Alehouse"
		],		
		[
		  "staffId"=>11,
		  "name"=>"Carl Woods",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>12,
		  "name"=>"Rebecca Martin",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>13,
		  "name"=>"Lauren Duncan",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>15,
		  "name"=>"Ronald Price",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>16,
		  "name"=>"Pamela Herrera",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>17,
		  "name"=>"Janice Garrett",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>19,
		  "name"=>"Roy Thompson",
		  "isClockedIn"=>0,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>20,
		  "name"=>"Sara Fisher",
		  "isClockedIn"=>0,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>22,
		  "name"=>"Ethan Reed",
		  "isClockedIn"=>0,
		  "currentLocation"=>"c",
		  "clientName"=>"Fabricated Solutions"
		],		
		[
		  "staffId"=>24,
		  "name"=>"Marie Thompson",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>25,
		  "name"=>"Nancy Berry",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>26,
		  "name"=>"Nancy Rivera",
		  "isClockedIn"=>0,
		  "currentLocation"=>"c",
		  "clientName"=>"Nonexistent Market"
		],		
		[
		  "staffId"=>28,
		  "name"=>"Mark Schultz",
		  "isClockedIn"=>0,
		  "currentLocation"=>"c",
		  "clientName"=>"Undisclosed Family Clinic"
		],		
		[
		  "staffId"=>29,
		  "name"=>"Henry Marshall",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>30,
		  "name"=>"Diane Adams",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
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
		  "staffId"=>2,
		  "name"=>"Alan Murphy",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>4,
		  "name"=>"Mark Munoz",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>5,
		  "name"=>"Robert Woods",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>6,
		  "name"=>"Dennis Brown",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>7,
		  "name"=>"Albert Ortega",
		  "isClockedIn"=>1,
		  "currentLocation"=>"c",
		  "clientName"=>"Made Up Books"
		],
		[
		  "staffId"=>8,
		  "name"=>"Judith Sanders",
		  "isClockedIn"=>0,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>9,
		  "name"=>"Louis Arnold",
		  "isClockedIn"=>0,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],
		[
		  "staffId"=>9,
		  "name"=>"Mildred Tucker",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>10,
		  "name"=>"Jonathan Wagner",
		  "isClockedIn"=>0,
		  "currentLocation"=>"c",
		  "clientName"=>"Imaginary Alehouse"
		],		
		[
		  "staffId"=>11,
		  "name"=>"Carl Woods",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],
		[
		  "staffId"=>12,
		  "name"=>"Rebecca Martin",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>13,
		  "name"=>"Lauren Duncan",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>15,
		  "name"=>"Ronald Price",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>16,
		  "name"=>"Pamela Herrera",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>17,
		  "name"=>"Janice Garrett",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>19,
		  "name"=>"Roy Thompson",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>20,
		  "name"=>"Sara Fisher",
		  "isClockedIn"=>1,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>22,
		  "name"=>"Ethan Reed",
		  "isClockedIn"=>1,
		  "currentLocation"=>"c",
		  "clientName"=>"Fabricated Solutions"
		],		
		[
		  "staffId"=>24,
		  "name"=>"Marie Thompson",
		  "isClockedIn"=>0,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>25,
		  "name"=>"Nancy Berry",
		  "isClockedIn"=>1,
		  "currentLocation"=>"o",
		  "clientName"=>""
		],		
		[
		  "staffId"=>26,
		  "name"=>"Nancy Rivera",
		  "isClockedIn"=>1,
		  "currentLocation"=>"c",
		  "clientName"=>"Nonexistent Market"
		],		
		[
		  "staffId"=>28,
		  "name"=>"Mark Schultz",
		  "isClockedIn"=>1,
		  "currentLocation"=>"c",
		  "clientName"=>"Undisclosed Family Clinic"
		],		
		[
		  "staffId"=>29,
		  "name"=>"Henry Marshall",
		  "isClockedIn"=>0,
		  "currentLocation"=>"i",
		  "clientName"=>""
		],		
		[
		  "staffId"=>30,
		  "name"=>"Diane Adams",
		  "isClockedIn"=>0,
		  "currentLocation"=>"i",
		  "clientName"=>""
		]
	];
}

?>
