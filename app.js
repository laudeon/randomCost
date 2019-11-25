const App = (function (myModule) {
  let rangeMin = 0
  let rangeMax = 10000

  let form
  let resElement

  let rangeMinValueElem
  let rangeMaxValueElem

  myModule.start = () => {
    form = document.querySelector('form')
    resElement = document.querySelector('#result h1')

    rangeMaxValueElem = document.querySelector('#rangeMaxValue')
    rangeMinValueElem = document.querySelector('#rangeMinValue')

    form.onsubmit = myModule.onSubmit
    myModule.showRangesValues()
  }

  myModule.onSubmit = event => {
    event.preventDefault()

    rangeMax = form.rangeMax.value
    rangeMin = form.rangeMin.value

    myModule.showRandomCost(myModule.getRandomCost())
  }

  myModule.getRandomCost = () =>  Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin*1)

  myModule.showRandomCost = cost => {
    if (rangeMin == rangeMax) {
      resElement.innerHTML = "Min and max are equal, you idiot!"
    } else if (rangeMin > rangeMax) {
      resElement.innerHTML = "Max is lower than min, are you idiot?"
    } else {
      resElement.innerHTML = cost
    }
  }

  myModule.showRangesValues = () => {
    rangeMaxValueElem.innerHTML = form.rangeMax.value
    rangeMinValueElem.innerHTML = form.rangeMin.value

    form.rangeMax.onchange = event => {
      rangeMaxValueElem.innerHTML = event.target.value
    }
    form.rangeMin.onchange = event => {
      rangeMinValueElem.innerHTML = event.target.value
    }
  }

  return myModule
}({}))