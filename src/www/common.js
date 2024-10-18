class sessionHandler {
    constructor(key) {
        this.innerKey = key;
    }
    get v() {
        return JSON.parse(sessionStorage.getItem(this.innerKey));
    }
    set v(val) {
        sessionStorage.setItem(this.innerKey, JSON.stringify(val));
    } 
}

class storageHandler {
    constructor(key) {
        this.innerKey = key;
    }
    get v() {
        return JSON.parse(localStorage.getItem(this.innerKey));
    }
    set v(val) {
        localStorage.setItem(this.innerKey, JSON.stringify(val));
    } 
}

const sessionDbTotalRows = new sessionHandler("db_total_rows");
const sessionDbCorruptedRows = new sessionHandler("db_corrupted_rows");
const sessionDifficulty = new sessionHandler("difficulty");

const goToPage = (url) => {
    document.location.href = url;
}


const fadeOutBody = (url = null) => {
    let opacity = 1;
    const body = document.body;
    const fadeOutInterval = setInterval(() => {
        if (opacity <= 0.01) {
            clearInterval(fadeOutInterval);
            if (url != null) setTimeout(() => goToPage(url), 1000)
        }
        body.style.opacity = opacity;
        opacity -= 0.05;
    }, 25);
}

const initGameSession = (difficulty  = 1) => {
    sessionDifficulty.v = difficulty;
    sessionDbCorruptedRows.v = 0;
    sessionDbTotalRows.v = 0;
}