function outputUpdate(vol) {
	document.querySelector('#ageCount').value = vol;
}

function calculateCamels() {
	document.getElementById('camelCalcaulateContainer').classList.add("hidden");
	document.getElementById('camelResults').classList.remove("hidden");
}

function recalculateCamels() {
	document.getElementById('camelCalcaulateContainer').classList.remove("hidden");
	document.getElementById('camelResults').classList.add("hidden");
	document.getElementById("friendForm").reset();
}