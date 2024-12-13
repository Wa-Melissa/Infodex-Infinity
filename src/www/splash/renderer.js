setTimeout(() => {
	fadeOutBody();
}, 2000)
setTimeout(() => { // wait 3sec
	if(document.location.href.endsWith("page1.html")) { // if current page is the first
		goToPage("page2.html");
		return;
	}
	node.maximizeWindow(); // dispatch event to maximize electron window
	goToPage("../login/page.html");
}, 3000)
