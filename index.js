// Include packages needed 
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'logoLetters',
    message: 'Enter up to (3) characters for logo.'
},
{
    type: 'input',
    name: 'textColor',
    message: 'Please input the color keyword or hexidecimal number you would like your logo text to be.',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose the shape you would like your logo to be.',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please input the color keyword or hexidecimal number you would like your logo shape color to be.'
  },
];

// Function to write SVG data to a file
function writeToFile(data) {
  fs.writeFile('logo.svg', data, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Generated logo.svg!');
    }
  });
}

// Function to generate SVG code based on user input
function generateSvg(responses) {
  const { shape, shapeColor, logoLetters, textColor } = responses;
  let svgCode;

  if (shape === 'Circle') {
    svgCode = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoLetters}</text> </svg>`;
  } else if (shape === 'Square') {
    svgCode = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoLetters}</text> </svg>`;
  } else if (shape === 'Triangle') {
    svgCode = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244,182 56,182" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoLetters}</text> </svg>`;
  }

  return svgCode;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    if (responses.logoLetters.length > 3){
        console.error("Text must not exceed 3 characters.");
    init ();  
    }
    else {const svgCode = generateSvg(responses);
    writeToFile(svgCode);}
  }).catch((err) => console.error(err));
}

// Function call to initialize app
init();