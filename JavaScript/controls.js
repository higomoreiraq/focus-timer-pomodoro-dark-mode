export default function Controls({
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
}) {

  function onButtonFlorest() {
    buttonFlorest.classList.add("btnClicked")
    buttonRain.classList.remove("btnClicked")
    buttonCoffeeShop.classList.remove("btnClicked")
    buttonFireplace.classList.remove("btnClicked")
    buttonSoundOff.classList.add("soundClicked")
  }

  function onButtonRain() {
    buttonFlorest.classList.remove("btnClicked")
    buttonRain.classList.add("btnClicked")
    buttonCoffeeShop.classList.remove("btnClicked")
    buttonFireplace.classList.remove("btnClicked")
    buttonSoundOff.classList.add("soundClicked")
  }

  function onButtonCoffeeShop() {
    buttonFlorest.classList.remove("btnClicked")
    buttonRain.classList.remove("btnClicked")
    buttonCoffeeShop.classList.add("btnClicked")
    buttonFireplace.classList.remove("btnClicked")
    buttonSoundOff.classList.add("soundClicked")
  }

  function onButtonFireplace() {
    buttonFlorest.classList.remove("btnClicked")
    buttonRain.classList.remove("btnClicked")
    buttonCoffeeShop.classList.remove("btnClicked")
    buttonFireplace.classList.add("btnClicked")
    buttonSoundOff.classList.add("soundClicked")
  }

  function onButtonSoundOff() {
    buttonFlorest.classList.remove("btnClicked")
    buttonRain.classList.remove("btnClicked")
    buttonCoffeeShop.classList.remove("btnClicked")
    buttonFireplace.classList.remove("btnClicked")
    buttonSoundOff.classList.remove("soundClicked")
  }

  function lightModeOn() {
    buttonDarkMode.classList.add("btnClicked")
    buttonLightMode.classList.add("hide")
    buttonDarkMode.classList.remove("hide")
  }

  function lightModeOff() {
    setTimeout(function() {
      body.classList.add("body-dark")
      page.classList.add("page-dark")
      buttonDarkMode.classList.remove("btnClicked")
      buttonLightMode.classList.add("hide")
      buttonDarkMode.classList.remove("hide")
      displayTimer.classList.add("timer-dark")
      buttonControls.classList.add("controls-dark")
      buttonCards.classList.add("cards-dark")
      buttonFooter.classList.add("footer-dark")
      buttonIconMode.classList.add("icon-mode-dark")
    }, 500)
  }

  function darkModeOn() {
    buttonLightMode.classList.add("btnClicked")
    buttonLightMode.classList.remove("hide")
    buttonDarkMode.classList.add("hide")
  }

  function darkModeOff() {
    setTimeout(function() {
      body.classList.remove("body-dark")
      page.classList.remove("page-dark")
      buttonLightMode.classList.remove("btnClicked")
      buttonLightMode.classList.remove("hide")
      buttonDarkMode.classList.add("hide")
      displayTimer.classList.remove("timer-dark")
      buttonControls.classList.remove("controls-dark")
      buttonCards.classList.remove("cards-dark")
      buttonFooter.classList.remove("footer-dark")
      buttonIconMode.classList.remove("icon-mode-dark")
    }, 500)
  }

  function playOn() {
    buttonPlay.classList.add("btnClicked")
    buttonStop.classList.remove("btnClicked")
  }

  function playOff() {
    setTimeout(function() {
      buttonPlay.classList.remove("btnClicked")
      buttonPause.classList.remove("btnClicked")
      buttonPlay.classList.add("hide")
      buttonPause.classList.remove("hide")
    }, 500)
  }

  function pauseOn() {
    buttonPause.classList.add("btnClicked")
    buttonStop.classList.remove("btnClicked")
  }

  function pauseOff() {
    setTimeout(function() {
      buttonPlay.classList.remove("btnClicked")
      buttonPause.classList.remove("btnClicked")
      buttonPlay.classList.remove("hide")
      buttonPause.classList.add("hide")
    }, 500)
  }

  function resetControls() {
    buttonPlay.classList.remove("btnClicked")
    buttonPause.classList.remove("btnClicked")
    buttonStop.classList.add("btnClicked")
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  }

  function stopOff() {
    setTimeout(function() {
      buttonStop.classList.remove("btnClicked")
    }, 500)
  }

  function addFiveOn() {
    buttonMoreFive.classList.add("btnClicked")
  }

  function addFiveOff() {
    setTimeout(function() {
      buttonMoreFive.classList.remove("btnClicked")
    }, 200)
  }

  function removeFiveOn() {
    buttonMinusFive.classList.add("btnClicked")
  }

  function removeFiveOff() {
    setTimeout(function() {
      buttonMinusFive.classList.remove("btnClicked")
    }, 200)
  }

  function endTimeOn() {
    buttonPlay.classList.add("btnClicked")
    buttonStop.classList.add("btnClicked")
    buttonMoreFive.classList.add("btnClicked")
    buttonMinusFive.classList.add("btnClicked")
  }

  function endTimeOff() {
    setTimeout(function() {
      buttonPlay.classList.remove("btnClicked")
      buttonStop.classList.remove("btnClicked")
      buttonMoreFive.classList.remove("btnClicked")
      buttonMinusFive.classList.remove("btnClicked")
    }, 1000)
  }

  return {
    onButtonFlorest,
    onButtonRain,
    onButtonCoffeeShop,
    onButtonFireplace,
    onButtonSoundOff,
    lightModeOn,
    lightModeOff,
    darkModeOn,
    darkModeOff,
    playOn,
    playOff,
    pauseOn,
    pauseOff,
    resetControls,
    stopOff,
    addFiveOn,
    addFiveOff,
    removeFiveOn,
    removeFiveOff,
    endTimeOn,
    endTimeOff
  }

}