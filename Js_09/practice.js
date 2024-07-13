//1 print Multiplication table
// user se koi num input le our uska table print kara.

// var value = +prompt('Print any number');
// for (var i = 0; i < value; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(value * j);
//   }
// }



//2 Array Element ka Sum Print kare
// var myArray = []
// var sum;
// for (var i = 0; i <= 5; i++){
// myArray.push(+prompt ('Enter Value'));
// }
// for (var j = 0; j < myArray.length; j++)
// {
//     sum = myArray[j] + sum;
// }

// console.log(sum);



//3 Array ka Sub se Bara Number print kare
// var myArray = []
// greaterValue;
// for (var i = 0; i < 5; i++){
//     myArray.push(+prompt('Enter the 5 value'));
// }
// for (var j = 0; j < myArray.length; j++){
//    greaterValue = myArray[j] 
// }

// console.log(greaterValue);


//4 User se String Le and asko ulta print kare
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Example usage:
// const inputString = prompt("Enter a string to reverse:");
// const reversedString = reverseString(inputString);
// console.log("Reversed string:", reversedString);



// Factorial
var userinputNumber = +prompt("Please Enter a Number");
var factorial = 1;

 for (var i = 2; i <= userinputNumber; i++) {
      factorial = factorial * i
 }
    console.log(factorial);