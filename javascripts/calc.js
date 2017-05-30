var leftHand = '';
var operator = '';
var rightHand = '';
var result = '';

var clearButton = document.getElementById('clear_button');
var equalButton = document.getElementById('equal_button');
var numberButtons = document.getElementsByClassName('number_button');
var operatorButtons = document.getElementsByClassName('op_button');
var screen = document.getElementById('screen');

function setScreen(){
  screen.innerText = leftHand + " " + operator + " " + rightHand + " " + result;
}

for(var i = 0; i < operatorButtons.length; i++) {
  var button = operatorButtons[i];
  button.addEventListener('click', function() {
    if(leftHand.length) {
        operator = this.innerText;
    } else {
        alert("Need to enter a value first!")
    }
  });
}


// for(var i = 0; i > numberButtons.length; i++) {
//   var button = operatorButtons[i];
//   button.addEventListener('click', function() {
//     alert("Can't add another operator!")
// });
// }

for(var i = 0; i < numberButtons.length; i++) {
  var button = numberButtons[i];
  button.addEventListener('click', function() {
    if(operator.length) {
      if(rightHand == "0") {
          alert("Can't divide by zero!")
      } else {
          rightHand += this.innerText;
          setScreen();
    }} else {
         leftHand += this.innerText;
         setScreen();
    }
  });
}

equalButton.addEventListener('click', function () {
  console.log(leftHand);
  console.log(operator);
  console.log(rightHand);

  var left = parseFloat(leftHand)
  var right = parseFloat(rightHand)

  if(leftHand && operator && rightHand){
    switch(operator) {
      case '+':
        result = left + right;
        break;
      case '-':
        result = left - right;
        break;
      case 'X':
        result = left * right;
        break;
      case '/':
        result = left / right;
        break;
      default:
        alert('Invalid operator');
    } setScreen();
  } else {
      //todo: make more user friendly by telling user what they are missing
      alert('Invalid equation!')
  } console.log(result)
});

clearButton.addEventListener('click', function() {
  leftHand = '';
  rightHand = '';
  operator = '';
  result = '';
  setScreen('');
  alert("Memory cleared!")
});
