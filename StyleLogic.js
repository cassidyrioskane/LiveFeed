//references the elements in the DOM that this file uses
const VID_COLLAPSE = document.getElementById("vidCollapse"); 
const VID_COLLAPSE_BTN = document.getElementById("vidToggle");
const STAFF_COLLAPSE = document.getElementById("staffCollapse");
const TICKET_COLLAPSE = document.getElementById("ticketCollapse");
	

//the timeOut that waits for the page to finish resizing 
let vidClassToggleTimer;

//variables that determine whether the video feed should 
//be hidden or visible based on view width
let isFullView; 
let vidToggleState = false;
let viewWidth = window.matchMedia("(max-width: 1000px)"); 

//set vars that tell toggleVid() to hide the video feed if the view width is 
//less than 1000px and display it if it's greater 
if (viewWidth.matches)
{
	isFullView = false;
	vidToggleState = true;
}
else
{
	isFullView = true;
	vidToggleState = false;
}

//responds to the window resizing. waits for half a second
//before resizing the window based on the collapse state of the tables
window.addEventListener("resize",()=>
{
	clearInterval(vidClassToggleTimer);
	vidClassToggleTimer = window.setTimeout(()=>
	{
		windowResize();
		adjustVidSize();
	}, 500);
});

//unlike the tables, the video feed has more complex style logic 
//that conflicts with BootStrap's collapse library.
//manually collapses/shows the video feed when its collapse
//button is clicked. 
VID_COLLAPSE_BTN.addEventListener("click", ()=>
{
	toggleVid();
	adjustVidSize();
});

toggleVid();

//checks vidToggleState to determine whether to show or hide the video feed
function toggleVid() 
{
	if (!vidToggleState)
	{
		vidToggleState = true;
		VID_COLLAPSE.classList.remove("vidDiv");
		VID_COLLAPSE.setAttribute("display", "block");
	}
	else
	{
		vidToggleState = false;
		VID_COLLAPSE.classList.add("vidDiv");
		VID_COLLAPSE.setAttribute("display", "none");
	}
}

//window resize event handler. toggles the visibility of the video feed 
//based on the new view width
function windowResize() 
{
	if (isFullView && viewWidth.matches)
	{
		isFullView = false;
		if (vidToggleState) 
			toggleVid();
	}
	else if (!isFullView && !viewWidth.matches)
	{
		isFullView = true;
		if (!vidToggleState) 
			toggleVid();
	}
}

//adjusts the size of the video feed based on the 
//collapse state of the tables and the width of the window
function adjustVidSize()
{
	if (!STAFF_COLLAPSE.classList.contains("show") &&
		VID_COLLAPSE.getAttribute("display") == "block" &&
		window.innerWidth < 768)
	{	
		VID_COLLAPSE.classList.add("vidDivMedSm");
	}
	if (STAFF_COLLAPSE.classList.contains("show") ||
			 VID_COLLAPSE.getAttribute("display") == "none" ||
			 window.innerWidth > 768 &&
			 VID_COLLAPSE.classList.contains("vidDivMedSm"))
	{
		VID_COLLAPSE.classList.remove("vidDivMedSm");
	}
}