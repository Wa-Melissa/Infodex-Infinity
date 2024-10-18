const DOM = {
    logout_btn: document.getElementById("logout-btn"),
    app_iframe: document.getElementById("app-iframe"),
    app_container: document.getElementById("app-container"),
    app_close_btn: document.getElementById("app-close-btn"),
    app_name: document.getElementById("app-name"),
    desktop_icons:  Array.prototype.slice.call(document.getElementsByClassName("desktop-icon")),
    black_fader: document.getElementById("black-fader"),
    clock: document.getElementById("clock"),
};
Object.freeze(DOM);

DOM.logout_btn.addEventListener("click", async (event) => {
    const result = await Swal.fire({
        title: "Etes vous certain de vouloir quitter la partie ?",
        showCancelButton: true,
        confirmButtonText: "Quitter",
        cancelButtonText: "Annuler",
        icon: "warning",
        confirmButtonColor: "#d33",
    })
    if (result.isConfirmed) {
        let opacity = 0;
        DOM.black_fader.style.display = "block";
        DOM.black_fader.style.opacity = opacity;
        const fadeOutInterval = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeOutInterval);
                setTimeout(async () => {
                    if (await node.isDebug()) return goToPage("../login/page2.html") ;
                    goToPage("../login/page.html")
                }, 1000);
            }
            DOM.black_fader.style.opacity = opacity;
            opacity += 0.03;
        }, 25);
    }
});


const closeApp = () => {
    DOM.app_iframe.src = "blank.html";
    DOM.app_container.style.display = "none";
    document.title = "The Librarian Game - Desktop" 
}
DOM.app_close_btn.addEventListener("click", closeApp);

const loadApp = async (appName) => {
    let fetcher = await fetch("app/" + appName + "/app.name");
    let name = (await fetcher.text()).trim();
    DOM.app_name.innerHTML = name;
    document.title = "The Librarian Game - " + name;
    DOM.app_iframe.src = "app/" + appName + "/app.html";
    DOM.app_container.style.display = "block";
};

const reloadApp = () => {
    let oldSrc = DOM.app_iframe.src;
    DOM.app_iframe.src = "blank.html";
    DOM.app_iframe.src = oldSrc;
}

DOM.desktop_icons.map((e) => {
    e.addEventListener("click", () => {
        loadApp(e.getAttribute("appname"));
    })
});

window.addEventListener("load", async () => {
    let opacity = 1;
    const fadeOutInterval = setInterval(() => {
        if (opacity <= 0.01) {
            DOM.black_fader.style.display = "none";
            clearInterval(fadeOutInterval);
        }
        DOM.black_fader.style.opacity = opacity;
        opacity -= 0.03;
    }, 25);        
});

let hourHasColon = false;
const updateHour = () => {
    const date = new Date();
    const hour = date.getHours();
    let min = date.getMinutes();
    if (min < 10) min = "0" + min;
    DOM.clock.innerHTML = hour + (hourHasColon ? ":" : '<span style="color: transparent">:</span>') + min;
    hourHasColon = !hourHasColon;
}
updateHour();
setInterval(updateHour,1000);

(async () => {
    if (!(await node.isDebug())) return;
    console.log("Debug shortcuts enabled.");
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'r') {
            document.location.reload();
            return;
        }
        if (event.ctrlKey && event.key === 'm') {
            reloadApp();
            return;
        }
    });
})();

