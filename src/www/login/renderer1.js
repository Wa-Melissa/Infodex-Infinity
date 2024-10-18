const DOM = {
    clock: document.getElementById("clock"),
    black_fader: document.getElementById("black-fader"),
}
Object.freeze(DOM);

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
})


document.addEventListener('click', () => {
    goToPage("page2.html")
});
document.addEventListener('keydown', (event) => {
    if (event.code !== 'Space') return;
    goToPage("page2.html")
});

const updateHour = () => {
    const date = new Date();
    const hour = date.getHours();
    let min = date.getMinutes();
    if (min < 10) min = "0" + min;
    DOM.clock.innerText = hour + ":" + min;
}
updateHour();
setInterval(updateHour,1000);


(async () => {
    if (!(await node.isDebug())) return;
    initGameSession();
    goToPage("../desktop/page.html");
})();