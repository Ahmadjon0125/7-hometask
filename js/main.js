var elForm = document.querySelector(".js-form")
var elInput = document.querySelector(".js-input")
var elSelect = document.querySelector(".js-select")
var elResult = document.querySelector(".result")

elForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var money = elInput.value;
  var currency = elSelect.value;
  
  elResult.value = money * currency;
  elResult.textContent = elResult.value 
})
