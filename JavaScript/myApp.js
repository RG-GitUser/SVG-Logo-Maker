//Seperate function to create the SVG logo 

function createSVGLogo(text, textColor, shape, shapeColor) {
  const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${shapeColor}" />
    <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="24">${text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');

}

module.exports = {createSVGLogo};