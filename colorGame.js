var numSquares = 6;

var colors = generateRandomColors (numSquares);

var clickedColor =""

var pickedColor = pickColor();

var displayColor = document.querySelector("#displayColor");
displayColor.textContent = pickedColor;

var message = document.getElementById("message");

var h1 = document.querySelector("h1");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6; 
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		
	}

});

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	//Gnerate new colos
	colors = generateRandomColors(numSquares);
	//pick new colors from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	displayColor.textContent = pickedColor;
	//change colors of sqaure
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Game";
	message.textContent = "";
})

var squares = document.querySelectorAll(".square");
for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		clickedColor = this.style.background;
		if(clickedColor == pickedColor){
			message.textContent = "Right Color Clicked";
			changeColors(clickedColor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Play Again?"
		} else{
			this.style.background = "#232323";
			message.textContent = "Wrong Color Clicked";
		}
	});
}

function changeColors(color){
	for(var i=0; i<squares.length; i++){
	squares[i].style.background = color;
	}	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
var arr = []
	//add num random colors
for(var i=0; i<num; i++){
	//get random color and push into arr
arr.push(randomColor())
}
	//return array
return arr;
}

function randomColor(){
	//random red
var r = Math.floor(Math.random() * 256)
	//random green
var g = Math.floor(Math.random() * 256)
	//random blue
var b = Math.floor(Math.random() * 256)
return "rgb(" + r + ", " + g + ", " + b + ")";
}