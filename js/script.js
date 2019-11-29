
window.onclick = function(event) { 
	if (event.target.id != 'menuBtn') {
		sidebar.style.display = "none";
	}
}

var sidebar = document.getElementById("mySidebar");
function openSide(){
	sidebar.style.display = "block";
}

function closeSide(){
	sidebar.style.display = "none";

}

