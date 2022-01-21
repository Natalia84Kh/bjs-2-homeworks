"user strick"
 class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock (time, fun, id){
        if(id === undefined) {
            throw new Error ('error text');
        } else if (this.alarmCollection.find(item => item.id === id)) {
            console.error();
            return;
        } else {
            return this.alarmCollection.unshift({time, fun, id});
        }
    }

    removeClock(id) {
        let lenghOfAlarmCollection = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id); 
        if (this.alarmCollection.length < lenghOfAlarmCollection) {    
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        let date = new Date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return (`${hours}:${minutes}`);
    }

    start () {
        function checkClock(time, fun, id) {
            if (getCurrentFormattedTime() === time) {
                return fun();
            }
        }
        if (this.timerId === null) {
            const f = () => this.alarmCollection.forEach(checkClock());
            this.timerId = setInterval(f, 1000); 
        }
    }

    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms () {
        this.alarmCollection.forEach(item => console.log(item.id, item.time));
        }
    

    clearAlarms () {
        clearInterval(this.timerId);
        this.alarmCollection.length = 0;
    }
}
