let x = 2 + '2';
console.log(x); // returns 22

let x = 2 + 2 + '2';
console.log(x); // returns 42

let x = 2 + true;
console.log(x); // returns 3; 2 + the true value of 1

let x = 2 + true + '2';
console.log(x); // 32

let x = true + '2';
console.log(x); // true2

let x = Number('Hello');
console.log(x); //NaN

let x = Boolean(1)
console.log(x); //True; if 0 = False

let x = Boolean(10000)
console.log(x); //True

let x = Number('');
console.log(x); //False

if([]){

}