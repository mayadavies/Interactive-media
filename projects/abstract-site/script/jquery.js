/*
Abstract website tutorial



*/
//declaring colours
 var red="#FF0000";
 var yellow="#FFFF00";
 var green="#81FF2B";
 var cyan="#00FFFF";
 var blue="#0000FF";
 var magenta="#FF00FF";
 var purple ="#662D91"

//declaring color palette in an array
 var colorPalette = [red,yellow,green,cyan,blue,magenta,purple];

/*
console.log(Math.random()); //Math.random creates a value between 0-1 (always a decimal)
console.log(Math.floor(Math.random())); //math.floor rounds down to a nearest whole number
console.log(Math.floor(Math.random() * 6)); */


var randomColor = Math.floor(Math.random() * colorPalette.length);

//console.log(colorPalette.length);

//this is a test to see if my file is linked tomy html//


//change bg color to green/

 //$("body").css("background-color",colorPalette[2]);

$("body").css("background-color",colorPalette[randomColor]);
//command '/'' makea a whole line a comment//


$("button").click(function() {
	console.log("Add Box");
	$("#box-container").append("<div></div>");

});


// For loop to create many boxes

for (var step= 0; step < 600; step ++) {
	$("#box-container").append("<div></div>");

};
//loop through all grid idems and add a random color from colorPallette
$("#box-container div").each(function(){
	var randomColorBoxes = colorPalette[Math.floor(Math.random() * colorPalette.length)];
	$(this).css("background-color", randomColorBoxes);

});

//randomly change width and height of grid item when clicked
// $("#box-container div").click(function()  {
// var randomWidth = Math.random() * 300;
// var randomHeight =Math.random() * 300;
// $(this).css("width",randomWidth).css("height", randomHeight);





