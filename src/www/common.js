class sessionHandler {
    constructor(key) {
        this.innerKey = key;
    }
    get v() {
        return sessionStorage.getItem(this.innerKey);
    }
    set v(val) {
        sessionStorage.setItem(this.innerKey, val);
    } 
}