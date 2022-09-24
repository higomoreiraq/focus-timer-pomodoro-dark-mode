import Sounds from "./sounds.js"
import Controls from "./controls.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMoreFive,
  buttonMinusFive
} from "./elements.js"

const sounds = Sounds()
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMoreFive,
  buttonMinusFive
})

export default function Timer({
  minutesDisplay,
  secondsDisplay,
}) {

  let minutes
  let seconds
  let timerTimeOut

  function lastTime() {
    updateDisplay(0, secondsDisplay.textContent)
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function resetTimer() {
    minutes = 25
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function addFiveTime() {
    minutes += 5
    updateDisplay(minutes, secondsDisplay.textContent)
  }

  function removeFiveTime() {
    
    if(minutes <= 5) {
      lastTime()
      return
    } 
    
    minutes -=5
    updateDisplay(minutes, secondsDisplay.textContent)
  }

  function countdown() {
    timerTimeOut = setTimeout(function() {

      seconds = Number(secondsDisplay.textContent)
      minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)

      if(minutes <= 0 && seconds <= 0) {
        controls.resetControls()
        controls.endTimeOn()
        controls.endTimeOff()
        sounds.kitchenTimerSound()
        return 
      }

      if(seconds <= 0) {
        --minutes
        seconds = 60
      }
      
      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  return {
    hold,
    resetTimer,
    addFiveTime,
    removeFiveTime,
    countdown
  }
}