addEventListener('keydown', event => {
  if (event.keyCode === 32) {
    flappy.flap()
  }
})
addEventListener('click', event => {
  event.initEvent(flappy.flap())
})