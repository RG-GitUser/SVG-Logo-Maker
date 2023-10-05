const { createSVGLogo } = require('./myApp'); 
const fs = require('fs');
//used jest mock to ensure we don't write actual files 
jest.mock('fs');

describe('createSVGLogo function', () => {
  // Created a spy on console.log
  let consoleLogSpy;

  beforeAll(() => {
    consoleLogSpy = jest.spyOn(console, 'log');
  });

  afterAll(() => {
    // Restores the original console.log after all tests are done
    consoleLogSpy.mockRestore();
  });

  // This test case describes the createSVGLogo function
  it('should create an SVG file with the specified content', () => {
  
    // Define input parameters for the function
    const text = 'Hello';
    const textColor = 'red';
    const shape = 'circle';
    const shapeColor = 'blue';

    //This code describes specific input parameters 
    const expectedSVGContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${shapeColor}" />
    <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="24">${text}</text>     
  </svg>`;

    // Call the createSVGLogo function with the input parameters
    createSVGLogo(text, textColor, shape, shapeColor);

    // Verify that fs.writeFileSync was called 
    expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', expectedSVGContent);

    // Verify that console.log was called 
    expect(consoleLogSpy).toHaveBeenCalledWith('Generated logo.svg');
  });
});
