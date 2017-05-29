var leftHand = '';
var operator = '';
var rightHand = '';
var result = ''; //placeholder variables; result = '' sets variables to empty string

var clearButton = document.getElementById('clear_button');
var equalButton = document.getElementById('equal_button');
var numberButtons = document.getElementsByClassName('number_button');
var operatorButtons = document.getElementsByClassName('op_button');
var screen = document.getElementById('screen');
//todo: wire up clear button event listener

//setScreen should probaby know how to set screen to result
//HINT: pass an argument to this function
function setScreen(){
  screen.innerText = leftHand + " " + operator + " " + rightHand + " = " + result;

}

for(var i = 0; i < operatorButtons.length; i++) {
var button = operatorButtons[i];
button.addEventListener('click', function() {
  // todo probably check for leftHand before set an operator
  operator = this.innerText;

});
}

for(var i = 0; i < numberButtons.length; i++) {
var button = numberButtons[i];
button.addEventListener('click', function() {
  if(operator.length) {
    // do not allow divide by zero
    rightHand += this.innerText;
    setScreen();
  } else {
    leftHand += this.innerText;
    setScreen();
  }
    // setScreen;
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

 //option com J to open devtools
