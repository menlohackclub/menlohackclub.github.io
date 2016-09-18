$('body').hide().fadeIn(2000);



let login = () => {
	let provider = new firebase.auth.GithubAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result) {
		let d = new Date();
		let nowString = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear() + ", " + Date.now();
		firebase.database().ref('users/' + result.user.uid).push({"login":nowString});
		firebase.database().ref('users/' + result.user.uid + "/email").set(result.user.email);
		window.location.href += "/Portal"
	}).catch(function(error) {
		alert(error);
	})
}

document.getElementById("LogInButton").addEventListener("click", login);


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

