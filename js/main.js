$('body').hide().fadeIn(2000);

let ref = new Firebase("https://menlo-hack-club.firebaseio.com");

let login = () => {
	let now = Date.now();
	ref.set({now});
	console.log("hello, world");
}

document.getElementById("test").addEventListener("click", login());


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

