
// Find the last element of the following 
// arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
const arr= [3,7,34,90,12];
const LastElement= arr.pop();
console.log({LastElement});
// Write a JS program that will join the following array elements 
// into a string. myPets = ["Cow", "Bird", "Snake", "Dog"];

const myPets=["Cow","Bird","Snake","Dog"];
const string=myPets.toString();
console.log({string});

// Write a JS script to sort the following array items. 
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
const elements =[-5,9,5,3,2,-3,6,8,4,1];
const newelements=elements.sort();
console.log({newelements});

// Write a program to remove duplicates from the following array. 
// Console the array without duplicates, 
// and console another array that only contains the duplicates
let arr1= ["boy", "man", "girl",  "school", "girl", "woman"];


// Write a JS script to search for the following 
// word in the array."food"If the word is present, return it else return 
// "the search word was not found". let arr5 = ["the", "way", "x", 4];
const arr2=["the","way","x",4];
const newarra2=arr2. includes("food");
console.log({newarra2});

// Write a JS script to sort the following string:let word = "renniw"
let word="renniw";
let word2=word.split("");
console.log(word2);
 word2.sort=((a,b)=>b-a);
console.log(word2);

// Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
const fruits=["Mangoes","pawpaw","Avocado pea","Banana","Orange","Apples","Peach","Guava","Grapes","Pinapple","Pears"];
const fruit=fruits.length-1;
console.log(fruit);
const fruit2=fruits.indexOf("apples");
console.log(fruit2);
 fruits[5]='Tomato'
 console.log(fruits);