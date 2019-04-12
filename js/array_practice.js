/** Basic JavaScript: Nest one Array within Another Array
You can also nest arrays within other arrays, like this: [["Bulls", 23], ["White Sox", 45]]. This is also called a Multi-dimensional Array.
*/

// Example
// var ourArray = [["the universe", 42], ["everything", 101010]];
//
// // Only change code below this line.
// var myArray = [["Nissan", "R32"], ["Infiniti", "G35"]];
// console.log(myArray);


/** var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
Note
There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.


Modify the data stored at index 0 of myArray to a value of 45.
*/

// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.

myArray[0] = 45;
console.log(myArray);
