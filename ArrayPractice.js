//*create an empty array to yse as a shopping list
var shoppingList=[];
//*====>add milk,bread,and apples to your list
shoppingList.push("milk");
shoppingList.push("bread");
shoppingList.push("apples");
//? update bread with banana end eggs
shoppingList[1]="banana";
shoppingList.push("eggs");
// console.log(shoppingList);

//? remove the last item from the list
shoppingList.pop();

//sort the list by alphabetically

shoppingList.sort();
console.log(shoppingList);

//find and  outpur of the index value of milk

var index = shoppingList.indexOf("milk");
console.log(index);

var newList=['juice','milk'];
var newList1=shoppingList.concat(newList);
console.log(newList1);


//?array is the object
let arr=[0,1,2];
console.log(typeof(arr)) //object




