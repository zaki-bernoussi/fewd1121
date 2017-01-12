var submit = document.getElementById ('submit');
var red = document.getElementById ('red');
var green = document.getElementById ('green');
var blue = document.getElementById ('blue');
var wrapper = document.getElementById ('wrapper');
var colorfulText = document.getElementById ('color-text');

// store values for red, green, and blue - to be used when we change wrapper color
var red_val;
var green_val;
var blue_val;

// make submit button clickable
submit.onclick = function(){
	red_val = red.value;
	green_val = green.value;
	blue_val = blue.value;
	// change wrapper's background-color
	// this is the pattern we're trying to build: rgb(255, 0, 0);
	wrapper.style.backgroundColor = "rgb(" + red_val + "," + green_val + ","+ blue_val + ")";
	colorfulText.innerHTML = "rgb(" + red_val + "," + green_val + ","+ blue_val + ")";
}