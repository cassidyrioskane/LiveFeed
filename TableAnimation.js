//controls the scrolling animation for the new ticket and staff tables
class TableAnimation 
{	
	//"tableBody" is the DOM element that corresponds to the table being animated
	constructor(tableBody)
	{
		this.tableBody = tableBody;
		this.animationEnabled = true;
		this.serverDataIsAvailable;
		this.animationUpdated;
		this.resizeTimer;
		this.updateTimer;
		
		//bind "this" the window.resize callback to this class to prevent scoping errors
		this.resizeCallback = this.handleResize.bind(this);
	}
	
	//if the contents of the table exceed the height of the parent container,
	//start the recursive animation loop
	startAnimation()
	{
		if (this.tableBody.offsetHeight > this.tableBody.parentElement.parentElement.offsetHeight)
		{
			let rowsMoved = this.moveAllRows();
			rowsMoved.then(()=>
			{
				this.animationUpdated = this.updateAnimationStatus();
			});
		}
	}
	
	// recursive function that repeatedly runs the scrolling animation sequence as long as
	// animationEnabled is true. returns a promise that tracks the completion of the 
	// animation cycle to prevent it from running again before it's complete.
	// because JS animations run asynchronously, the functions in this cycle use promises
	// to specify when they're finished
	async updateAnimationStatus()
	{
		if (!this.animationEnabled)
			return;
		if (this.tableBody.offsetHeight > this.tableBody.parentElement.parentElement.offsetHeight)
		{
			if (this.animationUpdated != undefined)
			{
				this.animationUpdated.then(()=>
				{
					this.animationUpdated = new Promise(resolve =>
					{
						let rowsMoved = this.moveAllRows(this.tableBody);
						rowsMoved.then(resolve());
					});
				});
			}
			else
			{
				this.animationUpdated = new Promise(resolve =>
				{
					let rowsMoved = this.moveAllRows();
					rowsMoved.then(resolve());
				});	
			}
		}
	}
	
	//pauses the animation by setting animationEnabled to false.
	//uses a timeout to wait 2.5 seconds, allowing the user to finish resizing.
	//starts the animation again if the table's content-height exceeds the 
	//height of the parent container 
	handleResize()
	{
		this.animationEnabled = false;
		clearInterval(this.resizeTimer);
		this.resizeTimer = window.setTimeout(()=>
		{
			this.animationEnabled = true;
			this.animationUpdated = this.updateAnimationStatus();
		}, 2500);	
	}

	//a recursive function that repeats the animation process for moving
	//rows from the top of the table to the bottom. 
	async moveAllRows()
	{
		if (!this.animationEnabled)
			return;
		else
		{
			return new Promise(resolve =>
			{
				let row = document.querySelector("#"+this.tableBody.id+" tr");
				let scrollFinished = this.scrollRowsOnce(row);
				scrollFinished.then(() => 
				{
					this.moveAllRows(this.tableBody);
					resolve();
				});
			});
		}
	}

	//moves the top row to the bottom and slides the rest of the rows up to 
	//fill the space left. 
	async scrollRowsOnce(row)
	{
		return new Promise(resolve => 
		{
			let rowMove = this.moveRow(row);
			rowMove.then(() => 
			{
				let tableSlide = this.slideTable(row);
				tableSlide.addEventListener("finish",() => {resolve();});
			});
		});
	}
	
	//moves a row to the bottom of the table 
	async moveRow(row)
	{
		return new Promise(resolve =>
		{
			let animation = this.animateRowRemove(row);
			animation.addEventListener("finish", ()=>
			{
				this.tableBody.appendChild(row);
				this.animateRowAppend(row);
			});
			resolve();
		});
	}

	//when a row is removed from the top of the table, this 
	//function makes it fade out instead of abruptly disappearing
    animateRowRemove(row) 
	{
		return row.animate(
		[
			{ opacity: 1 },
			{ opacity: 0 } 
		],
		{
			duration: 1800
		});
	}

	//similar to animateRowRemove, causes the row to fade in at the 
	//bottom of the table
	animateRowAppend(row) 
	{
		return row.animate(
		[
			{ opacity: 0 },
			{ opacity: 1 }
		],
		{
			duration: 1800
		});
	}

	//gets the height of the removed row and moves the remaining rows up 
	//by that amount
	slideTable(row) 
	{
		if (row !== null)
		{
			let rowHeight = row.scrollHeight;
			return this.tableBody.animate(
			[
				{ transform: 'translateY(0px)' },
				{ transform: `translateY(${-rowHeight}px)` } 
			],
			{
				duration: 1800
			});
		}
	}
}

