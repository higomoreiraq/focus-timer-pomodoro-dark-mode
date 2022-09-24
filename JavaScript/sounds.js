export default function Sounds() {

  const buttonPressAudio = new Audio("./Audios/Button-press.wav")
  const kitchenTimer = new Audio("./Audios/Kichen-Timer.mp3")
  const florestAudio = new Audio("./Audios/Floresta.wav")
  const rainAudio = new Audio("./Audios/Chuva.wav")
  const coffeeShopAudio = new Audio("./Audios/Cafeteria.wav")
  const fireplaceAudio = new Audio("./Audios/Lareira.wav")

  florestAudio.loop = true
  rainAudio.loop = true
  coffeeShopAudio.loop = true
  fireplaceAudio.loop = true

  function buttonPressSound() {
    buttonPressAudio.play()
  }

  function kitchenTimerSound() {
    kitchenTimer.play()
  }

  function onSoundFlorest() {
    florestAudio.play()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()
  }

  function onSoundRain() {
    florestAudio.pause()
    rainAudio.play()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()
  }

  function onSoundCoffeeShop() {
    florestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.play()
    fireplaceAudio.pause()
  }

  function onSoundFireplace() {
    florestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.play()
  }

  function offSound() {
    florestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()
  }

  function changeVolumeFlorest(e) {
    florestAudio.volume = e.currentTarget.value / 100
  }

  function changeVolumeRain(e) {
    rainAudio.volume = e.currentTarget.value / 100
  }

  function changeVolumeCoffeeShop(e) {
    coffeeShopAudio.volume = e.currentTarget.value / 100
  }

  
  function changeVolumeFireplace(e) {
    fireplaceAudio.volume = e.currentTarget.value / 100
  }

  return {
    buttonPressSound,
    kitchenTimerSound,
    onSoundFlorest,
    onSoundRain,
    onSoundCoffeeShop,
    onSoundFireplace,
    offSound,
    changeVolumeFlorest,
    changeVolumeRain,
    changeVolumeCoffeeShop,
    changeVolumeFireplace
  }
}