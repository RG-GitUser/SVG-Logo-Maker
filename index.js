const inquirer = require('inquirer');
const SVG = require('svg.js');

// Prompt user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        return input.length <= 3;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex):',
    },
  ])
  .then((answers) => {
    // Create an SVG.js drawing
    const draw = SVG().size(300, 200);
    
    // Create a shape based on the user's choice
    let shape;
    if (answers.shape === 'circle') {
      shape = draw.circle(100);
    } else if (answers.shape === 'triangle') {
      shape = draw.polygon('50,0 0,100 100,100');
    } else if (answers.shape === 'square') {
      shape = draw.rect(100, 100);
    }
    
    // Set the shape color
    shape.fill(answers.shapeColor);
    
    // Add text to the SVG
    draw.text(answers.text).font({ size: 24 }).fill(answers.textColor);
    
    // Save the SVG as 'logo.svg'
    draw.svg('logo.svg');
    
    console.log('Generated logo.svg');
  });
