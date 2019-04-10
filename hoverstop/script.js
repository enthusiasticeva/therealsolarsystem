// JavaScript Document
function planetstop() {
	var mer = document.getElementById("mercury");
	var ven = document.getElementById("venus");
	var ear = document.getElementById("earth");
	var mar = document.getElementById("mars");
	var jup = document.getElementById("jupiter");
	var sat = document.getElementById("saturn");
	var nep = document.getElementById("neptune");
	var ura = document.getElementById("uranus");
	
	mer.style.setProperty("animation-play-state", "paused");
	ven.style.setProperty("animation-play-state", "paused");
	ear.style.setProperty("animation-play-state", "paused");
	mar.style.setProperty("animation-play-state", "paused");
	jup.style.setProperty("animation-play-state", "paused");
	sat.style.setProperty("animation-play-state", "paused");
	nep.style.setProperty("animation-play-state", "paused");
	ura.style.setProperty("animation-play-state", "paused");
}

function planetgo() {
	var mer = document.getElementById("mercury");
	var ven = document.getElementById("venus");
	var ear = document.getElementById("earth");
	var mar = document.getElementById("mars");
	var jup = document.getElementById("jupiter");
	var sat = document.getElementById("saturn");
	var nep = document.getElementById("neptune");
	var ura = document.getElementById("uranus");
	
	mer.style.setProperty("animation-play-state", "running");
	ven.style.setProperty("animation-play-state", "running");
	ear.style.setProperty("animation-play-state", "running");
	mar.style.setProperty("animation-play-state", "running");
	jup.style.setProperty("animation-play-state", "running");
	sat.style.setProperty("animation-play-state", "running");
	nep.style.setProperty("animation-play-state", "running");
	ura.style.setProperty("animation-play-state", "running");
}