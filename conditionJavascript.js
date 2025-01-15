/*====>condition statement it has three type s 
 (1)if,(2) if-else , (3) ternary operator and switch operator =======*/

//?definition of the if statement
//*if some condition is true then a certain action will happen else another action will happen


//! for example
let rain = true;
if (rain) {  // this condition is verify that's why it's happen
    console.log("Taking my umbrella when i need to go outside:");

}
else {
    console.log("No need to take umbrella");
}

//?example2 find the even and odd number of the given natural number is
let num = 24;
if (num % 2 == 0) { // this condition is verify that's why it's happen   
    console.log(`the given number is even : ${num}`);
}
else {
    console.log(`the given number is  odd: ${num}`);
}


//  example3 if the age is below 18 then access denied 
let age = 15;
if (age < 18) {
    console.log("Access denied");
}
else {
    console.log("Access granted");
}

//example 4
let hobby = "dancing";
if (hobby == "coding") {
    console.log('i love coding too!');
}
else {
    console.log("can you teach me that!")
}

//!else if statement
//==>if a value falls into a certain category then a certain action will happen else if the value falls into 
// a different category than the previous statement the a certain action will happen else if the value falls into different category 
// than the previous statement then a certain action will happen else another action will happen


//matlab
//for example
let age1=10;
let cost=0;
let message;
if(age1<3){  
    cost=0;
    message="Access is free under three years old";
}
else if (age1>=3 && age1<12){
    cost=5;
    message="Access is Rs 5 for children between three and twelve years old";
}
else if(age1>=12 && age1<65){
    cost=10;
    message="A regular ticket costs Rs 10";
}

else{
    cost=7;
    message="A ticket is Rs 7"
}
console.log(message);
console.log("your total cost: "+cost);


//!practice exercise of condition operator

//create a prompt to ask the user's age
//*===>fizzBuzz with condition operator
// 'Fizz' if the number is divisible by 3,
// 'Buzz' if it is divisible by 5,
// 'FizzBuzz' if it is divisible by both 3 and 5,
 let num1=35;
 if(num%3==0){
    console.log("fizz");
 }
 else if(num%5==0){
    console.log("buzz");
 }
 else if(num%3==0 && num%5==0){
    console.log("fizzbuzz");
 }
 else{
    console.log("not divisible by anyone of the number:")
 }


//!leap year
let year=1900;
if(year%4==0 && year%100!=0 && year%400==0){
    console.log(`year is a leap: ${year}`);
}
else{
    console.log("the year is not a leap:")
}

//!rating movie
let age2=14; //we can check putting different value of the variable age2
if(age2<13){
    console.log("G-rated");
}
else if(age2>=13 && age2<=16){
    console.log("PG-rated");
}
else if(age2>17){
    console.log("R-rated");
}



//maximum of the three number 
let a=15;
let b=48;
let c=49;
if(a>b && a>c){
    console.log(`the maximum number is a : ${a}`);
}
else if(b>a && b>c){
    console.log(`the maximum number is b : ${b}`);
}
else{
    console.log(`the maximum number is c : ${c}`);
}



//!ternary operator
//*====>Syntax
// expression ? statement for true :statement associated with false;

// for example
let access=age<18 ?"access denied":"access ";
console.log(access)


//another example
age<18?console.log("denied"):console.log("access")




//*practice question 
//create a boolean value id
let id=true;
let message1=id==true?"valid":"invalid";
console.log(message1);

//using another 
id==true?console.log('valid'):console.log("invalid");



//switch statement
//syntax
switch(expression) {
    case value1:
    // code to be executed
    break;
    case value2:
    // code to be executed
    break;
    case value-n:
    // code to be executed
    break;
   }
   