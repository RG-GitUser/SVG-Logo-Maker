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

//Color input function 

function getColor(promt) {
  const color = readlineSync.question(promt);
  return color;
}

// Shape input function

function getShape() {
  const options = ['circle', 'triangle', 'square']; //selecting our shape by referring to "options"
  const index = readlineSync.keyInSelect(options, "Select a shape: "); //referring to our const "options" to prompt our "index" const to present the user with the "Select a shape" statement.
  return choices[index];
}

// Shape color input function 

function getShapeColor() {
  const color = readlineSync.question('Enter a color keyword or hexadecimal number for shape color: ');
  return color; 
}

//Main functionallity to get the application to work (this function allows us to execute all of our work above)

function main() {
  const text = getText();                                     
  const textColor = getColor('Enter a color keyword or hexadecimal number for shape color: ');
  const shape = getShape();
  const shapeColor = getColor('Enter a color keyword or hexadecimal number for shape color: ');

  createSVGLogo(text, textColor, shape, shapeColor);
}

main();