//!introduction of javascript javascript was created by Brendan Eich in 1995 and is a programming language that can be used to create interactive web pages and web applications.
//!javascript is a high-level language that is easy to learn and use, and is widely used in web applications and games.
//! javascript was made in 10 days
//!firstname of javascript is  mocha after that livescript and finally javasvcript.





// todo here  what can do typeof method, undefined,null datatype

// ! var is initialize the variable name which is a global variable, you can use anywhere in your code
var num=24;


// * now we can check out the typeof of null , it give the object type
console.log(typeof(null))
// output is object

function add(a,b){
    for (let i=0; i<num; i++){
        console.log(i);
    }
    console.log("welcome function inside:");
}
add(); //? it can not give any error because it initialize  a and b parameters as undefined

/* the increament and decreament operator

it has two types prefix and postfix
prefix means it gets executed before sending the variable through

postfix means it gets executed after sending the variable


*/
// *example of postfix
let nr=2;
console.log(nr++);
console.log(nr);

// ?another example here 
let nr1=4;
nr1++;
console.log(nr1);
//!output is 5

//todo example prefix
let a=3;
console.log(++a);
console.log(a);

// * combine example of the prefix and postfix

let nr2=4;
let nr3=5;
let nr4=2;
console.log(nr2++ + ++nr3 * nr4++);
//output is 16

// difference between == and === operator

//! double  equal operator  in javascript is check only the value of the variable 
// * triple equal operator in javascript is chekc the value and datatype of the variable 

// ?for examle
let str="5";  
let num1=5;
if(str==num1){  // it can only check the value of the given variable 
    console.log(true);
}else{
    console.log(false)
}
//output is true

// for example triple equal
let str1='5';
let num2=5;
if(str1===num2){
    console.log(true);
}
else{
    console.log(false);
}
//output is false
// !logical operator is 
/* it has three type and , or , not */
let x=4;
let y=4;
let z=5;
console.log(x<z && z>y); 
 // 1 means it is true
 /* or=||
 and=&&
 not=! */

 // 


//  basic example of variable and typeof method 
// you can see it in action:
let str3 = "Hello";
let nr5 = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("str", typeof str2); //output is string
console.log("nr", typeof nr5); // number
console.log("bigNr", typeof bigNr);//bigint
console.log("bool", typeof bool);//boolean
console.log("sym", typeof sym); //symbol
console.log("undef", typeof undef);//undefined
console.log("unknown", typeof unknown);//object

// some mathematics operations

console.log(2+"2"); //22
console.log(2-"2");  //0
console.log(2*"2");//4



// ? array in javascript
/* 1.array is a object type in javascript*
  2. array is store multiple values
  3.it can store hetrogeneius elements

*/

//* creating arrays  we have two method
let arr1=new Array("purple",1.5,true);
let arr2=['black',2.5,5,false];
// the index is start from 0 and end length of array -1 
// in this case both are creating a arrays

// now  the problems are here
let arr3=new Array(10); // it give the 10 items empty
let arr4=[10];//[10]

//! that's why array can creating using square bracket

var arr=[..."hi there", 5,true] //...is called spread operator and it convert the string into array
console.log(typeof(arr[0]));
console.log(typeof(arr[9]));
console.log(typeof(arr[8]));

var arr=["hi there"];
arr[0]="new value";
console.log(arr);

// accessing element in array is 
var cars=['Toyota','Renault','Volkswagen'];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
// now using length method to find out the size of array
var arr=[1,2,3,4,5,6]
console.log(arr.length);
// creating a length
var items=['Milk','Bread','Apples'];
console.log(items.length);
items[1]='Bananas';
console.log(items);

// arrays method
/*  1.push method add a value at last index  
2. 2.concat method is used to concat two arrays
3.pop method  is used remove the last element of an array

*/
//push method
var items=[1,2,3,4,5];
items.push(2);
items.push('akhil');
items.push('Janakpur');
console.log(items);

//concat method

var items1=[1,2,3,8,9];
var items=[10,30,20];
var items2=items.concat(items1);
console.log(items2);

// deleting the first element using shift method
