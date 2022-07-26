import Controls from "./controls.js"
import Sounds from "./sounds.js"
import Timer from "./timer.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMoreFive,
  buttonMinusFive,
  buttonFlorest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
  buttonLightMode,
  buttonDarkMode,
  body,
  page,
  displayTimer,
  buttonControls,
  buttonCards,
  buttonFooter,
  buttonIconMode
} from "./elements.js"

const controls = Controls({
  buttonFlorest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  buttonSoundOff,
  buttonDarkMode,
  buttonLightMode,
  body,
  page,
  displayTimer,
  buttonControls,
  buttonCards,
  buttonFooter,
  buttonIconMode,
  buttonPlay,
  buttonStop,
  buttonPause,
  buttonMoreFive,
  buttonMinusFive
})

const sounds = Sounds()

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

Events({controls, sounds, timer})