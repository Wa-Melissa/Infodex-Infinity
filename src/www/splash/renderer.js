setTimeout(() => {
    fadeOutBody();
}, 2000)
setTimeout(() => {
    if(document.location.href.endsWith("page1.html")) {
        document.location.href= "page2.html";
        return;
    }
    goToPage("../login/page.html");
}, 3000)