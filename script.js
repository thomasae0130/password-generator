// Password length slider
const range = document.getElementById('length');
const value = document.getElementById('lengthNum');

range.addEventListener('input', (event) => {
  value.textContent = range.value;
});

//html elements 
const button = document.querySelector('button');
const inputs = document.querySelectorAll('input[type=checkbox]');
const length = document.querySelector('input[type=range]');

// Password character types 
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

// checked array to push selected items and final password string to push to input field
let possibleCharacters = [];
let finalPassword = '';

// function to generate password string 
const passwordGen = () => {
  // clear possibleCharacters array and finalPassword string
  possibleCharacters = [];
  finalPassword = '';
  
  // check which character types are selected
  inputs.forEach((input) => {
    if (input.checked) {
      if (input.id === 'upperCase') {
        possibleCharacters.push(...uppercase);
      } else if (input.id === 'lowerCase') {
        possibleCharacters.push(...lowercase);
      } else if (input.id === 'numbers') {
        possibleCharacters.push(...numbers);
      } else if (input.id === 'characters') {
        possibleCharacters.push(...special);
      }
    }
  });

  // Check if no checkboxes are selected
  if (possibleCharacters.length === 0) {
    alert('Please select at least one character type.');
    return;
  }

  // generate random password characters and add them to finalPassword string
  for (let i = 0; i < length.value; i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    finalPassword += possibleCharacters[randomIndex];
  }
  
  // display final password in input field
  document.getElementById('password').value = finalPassword;
}

// event listener for button click
button.addEventListener('click', passwordGen);









