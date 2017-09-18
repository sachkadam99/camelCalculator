//update range inputs
function outputUpdate(vol) {
	document.querySelector('#ageCount').value = vol;
}

function heightUpdate(height) {
	document.querySelector('#heightLength').value = height;
}

// function to animate counter
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// set data
var friendData = {
	ageMax : 70,
	heightMax : 220,
	haircolorMax : 50,
	hairlengthMax : 40,
	eyecolorMax : 40,
	beardMax : 40,
	bodyMax : 30,
	totalMax : function() {
		return this.ageMax+this.heightMax+this.haircolorMax+this.hairlengthMax+this.eyecolorMax+this.beardMax+this.bodyMax;
	}

};

// function for settting new value into object
function setFriendAttributes() {
	friendData.ageCount = document.getElementById('ageCount').value;
	friendData.height = document.getElementById('heightLength').value;
	friendData.haircolor = document.getElementById('haircolor').value;
	friendData.hairlength = document.querySelector('.hairlength:checked').value;
	friendData.eyecolor = document.querySelector('#eyecolor:checked').value;
	friendData.beardCheckbox = document.querySelector('.beardCheckbox:checked').value;
	friendData.bodyCheckbox = document.querySelector('.bodyCheckbox:checked').value;
}

// function to calculate camels
function calculateCamels() {
	var totalMax = friendData.totalMax();
	var totalValue = (parseInt(friendData.ageCount)+parseInt(friendData.height)+parseInt(friendData.haircolor)+parseInt(friendData.hairlength)+parseInt(friendData.eyecolor)+parseInt(friendData.beardCheckbox)+parseInt(friendData.bodyCheckbox));

	return Math.floor((totalValue / totalMax) * 100);
}

//function to show camels 
function showCamels() {
	document.getElementById('camelCalcaulateContainer').classList.add("hidden");
	document.getElementById('camelResults').classList.remove("hidden");

	setFriendAttributes();

	var totalCamels = calculateCamels();

	animateValue("camelResultNumber", 1, totalCamels, 2000);

}

// function for recalculation and resetting form
function recalculateCamels() {
	document.getElementById('camelCalcaulateContainer').classList.remove("hidden");
	document.getElementById('camelResults').classList.add("hidden");
	document.getElementById("friendForm").reset();
}