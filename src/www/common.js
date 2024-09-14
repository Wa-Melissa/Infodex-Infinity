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

const goto = (url) => {
    document.location.href = url;
}