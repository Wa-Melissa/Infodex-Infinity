setTimeout(() => {
    fadeOutBody();
}, 2000)
setTimeout(() => {
    if(document.location.href.endsWith("page1.html")) {
        document.location.href= "page2.html";
        return;
    }
    document.location.href= "../login/page.html";
    node.maximizeWindow();
}, 3000)