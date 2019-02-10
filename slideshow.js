//Desislava Dicheva
//November 3, 2018

window.addEventListener("load",initAll,false);

var currImg = 0;
var captionText = [
	"Where there is no vision, there is no hope. ...",
	"Here is no way to peace, peace is the way. ",
	"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence",
	"Wherever you go, no matter what the weather, always bring your own sunshine.",
	"Nature always wears the colors of the spirit.",
	"Calm mind brings inner strength and self-confidence, so that's very important for good health.",
];

var title = [
  "Hope is...",
  "Peace is... ",
  "Success is... ",
  "Positivity is...",
  "Nature is...",
  "Calm is...",
];

function initAll() {
	document.getElementById("description").innerHTML = captionText[currImg];
  document.getElementById("title").innerHTML = title[currImg];
	document.getElementById("prevLink").addEventListener("click",function() {newSlide(-1);},false);
	document.getElementById("nextLink").addEventListener("click",function() {newSlide(1);},false);
}

function newSlide(direction) {
	var imgCt = captionText.length;

	currImg = currImg + direction;
	if (currImg < 0) {
		currImg = imgCt-1;
	}
	if (currImg == imgCt) {
		currImg = 0;
	}
	document.getElementById("slideshow").src = "images/Image" + currImg + ".jpg"
	document.getElementById("description").innerHTML = captionText[currImg];
  document.getElementById("title").innerHTML = title[currImg];
}
