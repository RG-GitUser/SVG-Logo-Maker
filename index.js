// Use dynamic import to import 'inquirer'
import('inquirer').then(async (inquirer) => {
    const fs = require('fs');
    const { createSVG } = require('svg.js');
    const { LogoGenerator, promptUser } = require('./'); // Import LogoGenerator and promptUser from myApp.js
  
    // Call the promptUser function
    promptUser();
  
    jest.mock('inquirer');
  
    describe('promptUser', () => {
      it('should generate SVG logo based on user input', async () => {
        inquirer.prompt.mockResolvedValueOnce({
          text: 'ABC',
          textColor: 'red',
          shape: 'circle',
          shapeColor: 'blue',
        });
  
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync');
  
        await promptUser();
  
        expect(writeFileSpy).toHaveBeenCalledWith('logo.svg', expect.any(String));
  
        // Add more assertions based on your specific requirements
      });
    });
  }).catch((err) => {
    console.error('Error importing inquirer:', err);
  });
  