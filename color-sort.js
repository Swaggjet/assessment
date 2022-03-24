/**
 * Write a function that takes in this array of color objects.
 *
 * The function must
 *  - accept an array parameter
 *  - sort blue objects and red objects into their own arrays
 *  - return a single object with the count of the blue array and the count of the red array
 *
 *  BONUS
 *  - instead of the count of each array, return an object that includes both arrays
**/

console.log("Color Sort file loaded");

// An array of color objects. DO NOT ALTER.
const colors = [
    { size: 'large', color: 'red' },
    { size: 'medium', color: 'blue' },
    { size: 'small', color: 'red' },
    { size: 'medium', color: 'red' },
    { size: 'small', color: 'blue' },
    { size: 'large', color: 'red' },
    { size: 'medium', color: 'red' },
    { size: 'medium', color: 'blue' },
    { size: 'medium', color: 'blue' },
    { size: 'large', color: 'red' },
];


// write and call your function

//- Write a function that takes in this array of color objects.
//- accept an array parameter
var arrayColor = {red:1, blue:2};

colors.sort(function (a, b) {
  return arrayColor[a.color] - arrayColor[b.color];

});

consol.log(arrayColors)


//function arrayColors(colors){
/*
 console.log(colors[1]);
  return (colors[1]);
//- sort blue objects and red objects into their own arrays
  if (colors.color == 'red') return 1;

  if (colors.color == 'blue') return 2;
};

arrayColor()

*/





//- return a single object with the count of the blue array and the count of the red array
