//syntax of the object
//*============>> variable variable_name ={key:value} this is a object   objects are not too dissimila to real world objects . they have properties and they can perform actions, method . */

//!creating an object in js
let dog={
    dogName:"Javascript",
    weight:2.4,
    color:"Brown",
    bread:"Chihuahua",
    age:3,
    burglarBiter:true
};

//updating an objects
dog["color"]="Blue";  //we can do this

dog.weight=45; //we can also do this
// console.log(dog);

// let variable="age";
// console.log(dog[variable]); 


//*object in objects
const arr={
    name:"aman",
    age:20,
    address:{
        street:"street1",
        number:"123",
        zipcode:"33116",
        city:"Miami",
        state:"florida"
    },
    year:2025
};
console.log(arr.address); //we can access the object inside the object like this



//Arrays in Object iska object ke andar array
company = { companyName: "Healthy Candy",
    activities: ["food manufacturing",
   "improving kids' health", "manufacturing toys"],
    address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
};
console.log(company.activities[1]);


//objects in array
let arr1=[{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
},
{
    dogName:"Javascript",
    weight:2.4,
    color:"Brown",
    bread:"Chihuahua",
    age:3,
    burglarBiter:true  
}
];
//we can find out the length
console.log(arr1.length);


console.log(arr1[1].burglarBiter);
console.log(arr1[1].color);
console.log(arr1[1].age);


//practice exercise 
let people={
    friends:[]
};
people.name="mohan";  //adding a name
people.lastName="Mahato";
people.Id="1234";

// console.log(people);

//adding the value object in array;
people.friends.push("Aman");
people.friends.push("Aayush");
people.friends.push("Abhishek");

console.log(people);

 //*========>the output is {    friends:['Aman','Aayush','Abhishek'],name:'mohan',lastName:'Mahato',Id:1234}   */
// const arr2=[1,2,3,4,5,6]
// arr2.push(8);
// const arr3=[1,23,4]
// arr2.concat(arr3)
// console.log(arr2);


//todo project 1 company product catalog


