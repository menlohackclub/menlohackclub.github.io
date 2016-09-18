$('body').hide().fadeIn(2000);

function login() {
	let req = new XMLHttpRequest();
	req.onload = () => {
		let reqObj = JSON.parse(req.responseText);
		console.dir(reqObj);
	}
	req.open("GET", "https://github.com/login/oauth/authorize?client_id=721ca0f795c77e6a7416", true);
	req.send();
}

document.getElementById("LogInButton").addEventListener("click", login());

// let slideshowImage = document.getElementById('slide');
// let photoArray = ['a.png', 'b.png', 'c.png'];
// let indx = 0;
// setInterval(() => {
// 	if (indx === photoArray.length - 1) indx = 0;
// 	else indx++;
// 	slideshowImage.setAttribute('src', 'images/' + photoArray[indx]);
// }, 5000);
// let shiftLeft = () => slideshowImage.setAttribute('src', 'images/' + photoArray[--indx]);
// let shiftRight = () => slideshowImage.setAttribute('src', 'images/' + photoArray[++indx]);
// $('#leftOverlay').bind('click', shiftLeft);
// $('#rightOverlay').bind('click', shiftRight);

