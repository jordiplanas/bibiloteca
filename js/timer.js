class Timer {
    constructor(tempTotalTime) {
        this.savedTime;
        this.totalTime = tempTotalTime;
    }

    start() {
        this.savedTime = millis();
    }

    isFinished() {
        let passedTime = millis() - this.savedTime;
        if (passedTime > this.totalTime) {
            return true;
        } else {
            return false;
        }
    }
    restart() {
        this.savedTime = millis();
    }

}