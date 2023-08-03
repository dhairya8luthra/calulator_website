let arr = [];
let outputString1 = '';

function outputString(arr) {
  return arr.join('');
}

outputString1 = outputString(arr);
const outputPTag = document.getElementById('output');
outputPTag.textContent = outputString1;

function displayer(arr) {
  outputString1 = outputString(arr);
  outputPTag.textContent = outputString1;
}

// AC
function allClear() {
  arr = [];
  displayer(arr);
}

const acPress = document.getElementById('AC');
acPress.onclick = allClear;

// = function
function equalTo() {
  outputString1 = eval(outputString(arr));
  arr = [outputString1];
  displayer(arr);
}

const equalPress = document.getElementById('equalBtn');
equalPress.onclick = equalTo;

// operators and numbers
function numpad() {
  let button = this;
  let buttonText = button.textContent;
  
  if (buttonText === '+') {
    arr.push('+');
  } else if (buttonText === '÷') {
    arr.push('/');
  } else if (buttonText === '×') {
    arr.push('*');
  } else if (buttonText === '−') {
    arr.push('-');
  }
  else if (buttonText === '.') {
    arr.push('.');
  }
   else {
    arr.push(Number(buttonText));
  }
  
  displayer(arr);
}

const numpadButtons = document.getElementsByClassName('numpad');
for (let i = 0; i < numpadButtons.length; i++) {
  numpadButtons[i].onclick = numpad;
}

// backspace
function backspace() {
  arr.pop();
  displayer(arr);
}

const backspacePress = document.getElementById('bkspc');
backspacePress.onclick = backspace;
