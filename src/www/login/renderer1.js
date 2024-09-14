const DOM = {
    clock: document.getElementById("clock")
}
Object.freeze(DOM);

node.maximizeWindow();


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
setInterval(updateHour,1000)
