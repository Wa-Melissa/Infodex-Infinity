setTimeout(() => {
	fadeOutBody();
}, 2000)
setTimeout(() => {
	if(document.location.href.endsWith("page1.html")) {
		goToPage("page2.html");
		return;
	}
	node.maximizeWindow();
	goToPage("../login/page.html");
}, 3000)