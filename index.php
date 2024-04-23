<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">	
	<!-- Custom CSS -->
	<link rel="stylesheet" href="LiveFeedStyles.css" >
	<title></title>
	
</head>
<body>
	<div class="container-flex mt-0 mb-0 ml-3 mr-3 h-50 pr-3 pl-3" id="mainContainer">

		<!-- color bar -->
		<div class="row ml-0 mr-0">
			<div class="col colorCol" style="background-color: #F89728"></div>
			<div class="col colorCol" style="background-color: #B92F92"></div>
			<div class="col colorCol" style="background-color: #00927E"></div>
			<div class="col colorCol" style="background-color: #711471"></div>
			<div class="col colorCol" style="background-color: #009AC7"></div>
		</div>
		
		<!-- date/time data -->
		<nav class="navbar borderDark pt-0 pb-0">
			<span class="headerGreen">BUSINESS NAME HERE</span>
			<div class="d-flex flex-row-reverse" id="dateTime">
				<span id="time" class="nav-link headerGreen">12:01PM</span>
				<span class="nav-link headerGreen">&#x2022;</span>
				<span id="monthAndDay" class="nav-link headerGreen">02/07 </span>
				<span class="nav-link headerGreen">&#x2022;</span>
				<span id="weekday" class="nav-link headerGreen">MONDAY</span>
			</div>
		</nav>

		<div class="row ml-1 p-0">
			<!-- collapse toggle buttons-->
			<div class="col-3 col-sm col-lg vertical-align mt-1 mt-md-auto mb-auto p-0" role="group" id="collapseButtons">
				<a class="collapseButton" data-toggle="collapse" href="#" role="button" id="vidToggle">Video Feed</a>
				<a class="collapseButton text-nowrap" data-toggle="collapse" href="#ticketCollapse" role="button" id="ticketToggle">New Tickets</a>
				<a class="collapseButton text-nowrap" data-toggle="collapse" href="#staffCollapse" role="button" id="staffToggle">Staff Status</a>
			</div>
			
			<!-- Daily message -->
			<textarea class="col-3 col-sm-7 col-xs-6 p-1 ml-sm-5 mr-sm-3 ml-2 mt-1" id="dailyMessage" placeholder="Click here to enter a daily message."></textarea>
		</div>
		
		<div class="row">
			<!-- Live video feed -->
			<div class="vidDiv col-9 col-md-4 row borderDark ml-md-3 ml-auto mt-2 mr-auto mb-auto p-2" id="vidCollapse">
				<h5 class="headerGray text-nowrap">FRONT DOOR LIVE FEED</h5>				
				<div class="card card-body border-light embed-responsive embed-responsive-3by4">
					<embed class="embed-responsive-item"><img class="img-fluid" src="img-videoplaceholder.jpg"></embed>
				</div>
			</div>
	
		
			<div class="col pb-0">
				<!-- unresolved tasks and past due tickets -->
				<span class="col ml-auto mr-auto text-center">
					<div class="row pr-3 pl-3">
						<div class="col borderBlue mr-1 m-auto pt-1 numberDiv">
							<p class="headerGray">INACTIVE TICKETS</p>
							<h1 id="inactive" class="textBlue numberDisplay"></h1>
						</div>
						<div class="col borderGreen m-auto pt-1 numberDiv">
							<p class="headerGray">PAST DUE TICKETS</p>
							<h1 id="pastDue" class="textGreen numberDisplay"></h1>
						</div>			
					</div>
				</span>

				<!-- staff table -->
				<div class="col collapse show collapseTable borderOrange h-md-100 pr-3 pl-3 pt-2 pb-2 text-truncate" id="staffCollapse">
					<div class="row">
						<h5 class="ml-3 headerOrange">STAFF STATUS</h5>
					</div>
					<div class="table-wrapper-scroll-y" id="staffTableWrapper">
						<table class="table-borderless pb-3 w-100">
							<tbody id="staffTable">
							</tbody>
						</table>
					</div>
				</div>
			</div>	
		</div>
		

	
		<div class="row">
			<!-- new tickets table -->
			<div class="row collapse show collapseTable borderPurple pr-3 pl-3 pt-2 pb-2 ml-3 mr-3 mb-2 mt-3 w-100" id="ticketCollapse">
				<div class="row">
					<h5 class="ml-3 headerPurple">NEW TICKETS</h5>
				</div>
				<div class="row">
					<p class="col-3 headerGray">Date/Time</p>
					<p class="col headerGray" >Subject</p>
					<p class="col-4 text-left headerGray">Client</p>
				</div>
				<div class="table-wrapper-scroll-y w-100" id="ticketTableWrapper">
					<table class="table-borderless w-100">
						<tbody class="pt-4" id="ticketTable">
						</tbody>
					</table>
				</div>
			</div>
		</div>
		
		<!-- bottom color bar-->
		<div class="row ml-0 mr-0 mt-3 mb-0">
			<div class="col colorCol" style="background-color: #F89728"></div>
			<div class="col colorCol" style="background-color: #B92F92"></div>
			<div class="col colorCol" style="background-color: #00927E"></div>
			<div class="col colorCol" style="background-color: #711471"></div>
			<div class="col colorCol" style="background-color: #009AC7"></div>
		</div>
	</div>
	
	<!-- JS imports -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	
	<!-- custom js -->
	<script src="DailyMessage.js"></script>
	<script src="Clock.js"></script>
	<script src="TableRow.js"></script>
	<script src="TableAnimation.js"></script>
	<script src="StyleLogic.js"></script>
	<script src="Main.js"></script> 
	
</body>
</html>