CarLot = (function(carLot) {
  carLot.activateEvents = function() {
    var cards = document.querySelectorAll(".carCard")
    // console.log(cards)
    cards.forEach(function(card){
      card.addEventListener("click", function(){
        var userInput = document.querySelector("#userInput")
        userInput.value = ""
        userInput.focus()
        CarLot.resetCards(cards)
        CarLot.styleCard(card, "pink")
        CarLot.mirrorText(card)
      })
    })
  }
  return carLot
})(CarLot);