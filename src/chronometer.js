//Iteration 1
class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null; 
  }
//Iteration 2
  start(printTimeCallback) {
this.intervalId = setInterval(() => {
  this.currentTime++
  if(printTimeCallback) {
    printTimeCallback()
  }
}, 1000)
}

//Iteration 3
  getMinutes() {
 return Math.floor(this.currentTime / 60)
}

//Iteration 4
  getSeconds() {
   return this.currentTime % 60
  }

//Iteration 5
  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    } else {
      return String(value)
    }
    }

//Iteration 6
  stop() {
    clearInterval(this.intervalId)
  }
//Iteration 7
  reset() {
    this.currentTime = 0 
  }
// Iteration 8
  split() {
return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
