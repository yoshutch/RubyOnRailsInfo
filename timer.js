
// variables that can be set
var timerLength = 10000;
var cancelURL = "http://google.com";

// begin the timer
//timer();

function timer () {
	setTimeout(function(){
		alarm();
	}, timerLength);
}

function alarm () {
	popupDialog("Your session has timed out. Do you want to continue your session?", function(){
		timer();
	}, function(){
		window.location = cancelURL;
	});	
}

function popupDialog (str, callbackYes, callbackNo) {
	//add a background that slightly covers the rest of the page while dialog is up
	var container = document.getElementById("container");
	var modalDiv = document.createElement("div");
	modalDiv.className = "modal";
	container.appendChild(modalDiv);

	//add the dialog to the doc
	var dialog = document.createElement("div");
	dialog.className = "dialog";
	var dialogText = document.createElement("div");
	dialogText.innerText = str;
	dialog.appendChild(dialogText);
	//add the buttons to the dialog
	var dialogButtons = document.createElement("div");
	dialogButtons.className = "dialogButtons";
	var yesButton = document.createElement("button");
	yesButton.innerText = "Yes";
	//when clicked yes
	yesButton.addEventListener("click", function(){
		modalDiv.remove();
		dialog.remove();
		callbackYes();
	});
	dialogButtons.appendChild(yesButton);
	var noButton = document.createElement("button");
	noButton.innerText = "No";
	//when clicked no
	noButton.addEventListener("click", function(){
		callbackNo();
	});
	dialogButtons.appendChild(noButton);
	dialog.appendChild(dialogButtons);

	container.appendChild(dialog);
}




