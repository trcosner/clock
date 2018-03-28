import { decorate, observable, computed, action } from 'mobx'

class Time {
  timestamp = new Date();

  get local(){
    return {
      dayOfWeek: this.timestamp.getDay(),
      month: this.timestamp.getMonth(),
      year: this.timestamp.getFullYear(),
      date: this.timestamp.getDate(),
      time: this.timestamp.toLocaleTimeString('en-US')
    }
  }

  setTimestamp(timestamp){
    this.timestamp = new Date(timestamp);
  }
}

decorate(Time, {
  timestamp: observable,
  local: computed,
  setTimestamp: action.bound
})

export default new Time();
