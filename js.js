// variables
var number = 10;
let string = "Hello There";
const isRad = true;

console.log(number, string, isRad);
console.log("   ");

// // call doc in browser
// document.getElementById('box').innerHTML = number + 25 + ' ' + string;

// condition
if (number >= 10) {
  console.log("Okay, it works!");
} else {
  console.log("Nope, it doesn't work");
}
console.log("   ");

// array creating
let groceries = [
  "Soya Milk",
  "Soda",
  "Rice",
  "Flour",
  "Beans",
  "Beetroots",
  "Carrot",
];
// loop with array
for (let i = 0; i < groceries.length; i++) {
  console.log(groceries[i]);
}
console.log("   ");

// comma operator:
var zx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var yu = [zx, zx, zx, zx, zx];

for (var i = 0, j = 9; i <= j; i++, j--)
  //                                ^
  console.log("yu[" + i + "][" + j + "]= " + yu[i][j]);
console.log("   ");
/* // function definition
function listGroceries() {
  for (let j = 0; j < groceries.length; j++) {
    console.log(groceries[j]);
  }
}
// calling functions:
listGroceries();
console.log("   ");

// function expressions
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));

// Traditional Function:
function bob(a) {
  return a + 100;
}

// Arrow Function:
let bob = (a) => a + 100; */

// call alert window
document.getElementById("box").addEventListener("click", function () {
  alert("I got clicked");
});
console.log("   ");

// object creating v1
let personIryna = new Object();

personIryna.name = "Iryna";
personIryna.lastName = "Bilinska";
personIryna.isHuman = true;
personIryna.age = 27;
personIryna.gender = "Female";
personIryna.birthDate = "02/21/1995";
personIryna.married = null;
personIryna.children = null;
personIryna.pet = "Africa";
// function declaration
personIryna.updateAge = function () {
  return ++personIryna.age;
};

console.log(personIryna);
console.log(personIryna.age);
personIryna.updateAge();
console.log(personIryna.age);

// object creating v2
let personVladyslav = {};
personVladyslav.name = "Vladyslav";
personVladyslav.lastName = "Bilinskyi";
personVladyslav.isHuman = true;
personVladyslav.age = 17;
personVladyslav.gender = "Male";
personVladyslav.birthDate = "05/16/2005";
personVladyslav.married = null;
personVladyslav.children = null;
personVladyslav.pet = null;
// function declaration
personVladyslav.updateAge = function () {
  return ++personVladyslav.age;
};

console.log(personVladyslav);

// // object creating v3
let personOxana = {
  name: "Oxana",
  lastName: "Bilinska",
  isHuman: true,
  age: 48,
  gender: "Female",
  birthDate: "03/10/1974",
  // object creating v4
  married: (personIhor = Object.create({
    name: { value: "Ihor" },
    lastName: { value: "Bilinskyi" },
    isHuman: { value: true },
    age: { value: 51 },
    gender: { value: "Male" },
    birthDate: { value: "07/30/1971" },
    married: { value: this },
    children: { value: [personIryna, personVladyslav] },
    pet: { value: personIryna.pet },
  })),
  children: [personIryna, personVladyslav],
  pet: personIryna.pet,
};

console.log(personOxana);

// object creating v5
let pet = {};

const petAfrica = Object.create(pet);

petAfrica.name = "Africa";
petAfrica.lastName = null;
petAfrica.isHuman = false;
petAfrica.age = 5;
petAfrica.gender = "Female";
petAfrica.birthDate = "09/20/2017";
petAfrica.married = null;
petAfrica.children = null;
petAfrica.owner = [personIryna, personOxana, personIhor];

console.log(petAfrica);

for (let key in petAfrica) {
  if (petAfrica[key]) {
    console.log(`${key} value : ${petAfrica[key]}`);
  }
}
console.log("   ");

/*// global use strict
("use strict");
myFunction();

function myFunction() {
  y = 3.14; // This will cause an error because y is not declared
  consol.log(y);
}

// lockal use strict
x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14; // This will cause an error
}*/

// classes
class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
}
let personLesia = new Person("Lesia", "Lapishko", 52);
console.log(personLesia);
console.log("   ");

// typeof
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var foo = ["Apple", "Mango", "Orange"];
var today = new Date();

typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"

console.log(
  typeof myFun,
  typeof shape,
  typeof size,
  typeof foo,
  typeof today,
  typeof doesntExist
);
console.log("   ");

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];

console.log(
0 in trees,         // returns true
3 in trees,         // returns true
6 in trees,         // returns false
'bay' in trees,     // returns false (you must specify the index number, not the value at that index)
'length' in trees   // returns true (length is an Array property)
);
console.log("   ");

// conditions
function whoIs(age, gender) {
  let iKnow;
  if (age == 27 && gender == "Female") {
    return (iKnow = `Oh, it is ${personIryna.name}!`);
  } else if (age == 17 && gender != "Female") {
    return (iKnow = `Oh, it is ${personVladyslav.name}!`);
  } else if (age == 48 && gender == "Female") {
    return (iKnow = `Oh, it is ${personOxana.name}!`);
  } else if (age == 51 && gender == "Male") {
    return (iKnow = `Oh, it is ${personIhor.name.value}!`);
  } else if (age == 52 && gender != "Male") {
    return (iKnow = `Oh, it is ${personLesia.name}!`);
  } else {
    return (iKnow = `Oh, I do not know this person!`);
  }
}
console.log(whoIs(52, "Female"));
console.log(whoIs(27, "Female"));
console.log(whoIs(51, "Male"));
console.log(whoIs(48, "Female"));
console.log(whoIs(43, "Female"));
console.log(whoIs(17, "Male"));
console.log("   ");

// switch
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);
console.log("   ");

// loops: for
let phrase = "";
for (let i = 0; i < 5; i++) {
  phrase += "\t" + "The number is " + i + "\t"; // <br> розрив рядка в HTML
}
console.log(phrase);

// loops: for...in
const person = { fname: "John", lname: "Doe", age: 25 };

let text2 = "";
for (let x in person) {
  text2 += "\t" + person[x];
}
console.log(text2);

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let y in numbers) {
  txt += "\t" + numbers[y] + "\t";
}
console.log(txt);

// loops: for...of
const cars = ["BMW", "Volvo", "Mini"];

let vichcles = "";
for (let q of cars) {
  vichcles += "\t" + q + "\t";
}
console.log(vichcles);

let language = "JavaScript";

let letters = "";
for (let n of language) {
  letters += "\t" + n + "\t";
}
console.log(letters);

// loops: while
let numerico = "";
let c = 0;
while (c < 5) {
  numerico += "\t" + "The number is " + c + "\t";
  c++;
}
console.log(numerico);

const carBrands = ["BMW", "Volvo", "Saab", "Ford"];
let a = 0;
let brand = "";

while (carBrands[a]) {
  brand += "\t" + carBrands[a] + "\t";
  a++;
}
console.log(brand);

// loops: do...while
let dodo = "";
let b = 0;

do {
  dodo += "\t" + "The number is " + b + "\t";
  b++;
} while (b < 5);
console.log(dodo);

const carsMarks = ["BMW", "Volvo", "Saab", "Ford"];
let v = 0;
let mark = "";

do {
  mark += "\t" + carsMarks[v] + "\t";
  v++;
} while (carsMarks[v]);
console.log(mark);

// loops: break
let breakEx = "";
for (let k = 0; k < 5; k++) {
  if (k === 3) {
    break;
  }
  breakEx += "\t" + "The number is " + k + "\t";
}
console.log(breakEx);

// loops: continue
let continueEx = "";
for (let l = 0; l < 5; l++) {
  if (l === 3) {
    continue;
  }
  continueEx += "\t" + "The number is " + l + "\t";
}
console.log(continueEx);

/* 
Type Conversion:
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans

Strings to Numbers:
Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN

Number()	Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer

+"3.14"     // returns 3.14
+" "        // returns 0
+""         // returns 0
+"99 88"    // returns NaN

Numbers to Strings:
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression

The Number method toString() does the same.
d = new Date();
Number(d) 

Dates to Numbers:
The global method Number() can be used to convert dates to numbers.
d = new Date();
d.getTime()

Date to String:
Date().toString()  // returns "Tue Mar 22 2022 19:07:19 GMT+0300 (W. Europe Daylight Time)"

Date Methods:
getDate()	Get the day as a number (1-31)
getDay()	Get the weekday a number (0-6)
getFullYear()	Get the four digit year (yyyy)
getHours()	Get the hour (0-23)
getMilliseconds()	Get the milliseconds (0-999)
getMinutes()	Get the minutes (0-59)
getMonth()	Get the month (0-11)
getSeconds()	Get the seconds (0-59)
getTime()	Get the time (milliseconds since January 1, 1970)

Booleans to Numbers:
Number(false)     // returns 0
Number(true)      // returns 1

Booleans to Strings:
String(false)      // returns "false"
String(true)       // returns "true"

Strings to Booleans:
false.toString()   // returns "false"
true.toString()    // returns "true"

Automatic Type Conversion:
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

Automatic String Conversion:
// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
*/

/* 
Assignment operators:
Name	                            Shorthand operator	          Meaning
Assignment	                        x = f()	                  x = f()
Addition assignment	                x += f()    	            x = x + f()
Subtraction assignment	            x -= f()	                x = x - f()
Multiplication assignment	          x *= f()	                x = x * f()
Division assignment	                x /= f()	                x = x / f()
Remainder assignment	              x %= f()	                x = x % f()
Exponentiation assignment	          x **= f()	                x = x ** f()
Left shift assignment	              x <<= f()	                x = x << f()
Right shift assignment	            x >>= f()	                x = x >> f()
Unsigned right shift assignment	    x >>>= f()	              x = x >>> f()
Bitwise AND assignment	            x &= f()	                x = x & f()
Bitwise XOR assignment	            x ^= f()	                x = x ^ f()
Bitwise OR assignment	              x |= f()	                x = x | f()
Logical AND assignment	            x &&= f()	                x && (x = f())
Logical OR assignment	              x ||= f()	                x || (x = f())
Logical nullish assignment	        x ??= f()                 x ?? (x = f())

Arithmetic operators:
Remainder (%)	Binary operator. Returns the integer remainder of dividing the two operands.	12 % 5 returns 2.
Increment (++)	Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.	If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.
Decrement (--)	Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.	If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.
Unary negation (-)	Unary operator. Returns the negation of its operand.	If x is 3, then -x returns -3.
Unary plus (+)	Unary operator. Attempts to convert the operand to a number, if it is not already.	+"3" returns 3. +true returns 1.
Exponentiation operator (**)	Calculates the base to the exponent power, that is, base^exponent	2 ** 3 returns 8.
10 ** -1 returns 0.1.

Bitwise operators:
Bitwise AND	a & b	Returns a one in each bit position for which the corresponding bits of both operands are ones.
Bitwise OR	a | b	Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
Bitwise XOR	a ^ b	Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]
Bitwise NOT	~ a	Inverts the bits of its operand.
Left shift	a << b	Shifts a in binary representation b bits to the left, shifting in zeros from the right.
Sign-propagating right shift	a >> b	Shifts a in binary representation b bits to the right, discarding bits shifted off.
Zero-fill right shift	a >>> b	Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.

Bitwise shift operators:
Left shift
(<<)	This operator shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.	9<<2 yields 36, because 1001 shifted 2 bits to the left becomes 100100, which is 36.
Sign-propagating right shift (>>)	This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left.	9>>2 yields 2, because 1001 shifted 2 bits to the right becomes 10, which is 2. Likewise, -9>>2 yields -3, because the sign is preserved.
Zero-fill right shift (>>>)	This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left.	19>>>2 yields 4, because 10011 shifted 2 bits to the right becomes 100, which is 4. For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result.

Logical operators:
Logical AND (&&)	expr1 && expr2	Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
Logical OR (||)	expr1 || expr2	Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
Logical NOT (!)	!expr	Returns false if its single operand that can be converted to true; otherwise, returns true.

Conditional (ternary) operator:
condition ? val1 : val2
var status = (age >= 18) ? 'adult' : 'minor';

Comma operator:
var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

Unary operators:
delete object.property;
delete object[propertyKey];
delete objectName[index];

void:
void (expression)
void expression
The void operator specifies an expression to be evaluated without returning a value. expression is a JavaScript expression to evaluate. The parentheses surrounding the expression are optional, but it is good style to use them.

Relational operators 'in':
propNameOrNumber in objectName

instanceof:
objectName instanceof objectType
*/
