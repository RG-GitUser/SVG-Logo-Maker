//Declaring our "const" variables 

const fs = require('fs');
const readlineSync = require('readline-sync');
const { createSVGLogo } = require(',/myApp'); 

//Text input field function 

function getText() {
  const text = readlineSync.question('Enter up to three characters.');
  if (text.length > 3 ) {
    console.error('Please enter up to three characters.');
    return getText();
  }
  return text;
}