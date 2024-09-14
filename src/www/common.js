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