// לולאות 

// משימה ראשונה
// for(let i = 0; i < 20; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// משימה שניה 

// for(let index = 0; index < 11; index++){
//     console.log(index)
// }

// משימה שלישית

// משימה רביעית 
// let i = 0;
// let z = 0
// while(i < 5){
//     i++
//     z = z + i
// }
// console.log(z)

// משימה חמישית

// for(let i = 0; i < 1000; i++ ){
//     if(i % 2 != 0 ){
//         console.log(i)
//     }
// }

// משימה שישית

// let x = Number(prompt("please enter a number: "));

// for(let i = 0; i < 11; i++){
//     console.log(x * i)
// }

// משימה שביעית

// let arr =  ['red', 'green', 'blue']

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// משימה שמינית 

// let x = Number(prompt("please enter a number: "));
// if (x < 0) {
//       console.log(undefined);
//     }
//     else if (x === 0 || x === 1) {
//       console.log(1);
//     }
//     else {
//       let result = 1;
//       for (let i = 2; i <= x; i++) {
//         result = result *i;
//       }
//       console.log(result);
//     }



// משימה תשיעית

// let n = 6
//     let fibArr = [0, 1];
//     for (let i = 2; i < n; i++) {
//       fibArr.push(fibArr[i-1] + fibArr[i-2]);
//     }
//     console.log(fibArr.slice(0, n));

// משימה עשר
// let str = "hello"
// let x = ""
// for (var i = str.length - 1; i >= 0; i--) {
//     x += str[i];
//   }
// console.log(x)  



// Array

// function reverseAlphabeticalSort(arr) {
//     return arr.sort((a, b) => b.localeCompare(a))
// }

// const words = ["banana", "apple", "cherry", "date"]
// const sortedWords = reverseAlphabeticalSort(words)
// console.log(sortedWords)


// console.log(SortWords(x))

// משימה שניה

// function filterNumbers(arr){
//     return arr % 2 == 0
// }

// const ages = [1,2,3,4,5,6,7,8];
// const result = ages.filter(filterNumbers);
// console.log(result)

// משימה שלישית

// function stringLengths(arr) {
//     return arr.map(function(str) {
//       return str.length;
//     });
//   }
//   let arr = ["hello", "world", "javascript"];
//   let lengths = stringLengths(arr);
//   console.log(lengths); 

// משימה רביעית

// function getNumbers(arr){
//     return arr.map(num => num * 2);

// }
// let arr2 = [1, 2, 3,4,5,6];
// let lengths = getNumbers(arr2);
// console.log(lengths); 

// משימה חמישית

// function sumArray(arr) {
//     return arr.reduce(function(a, b) {
//       return a + b;
//     }, 0);
//   }

// let x = [1,2,3,4];
// console.log(sumArray(x))
  

// משימה שישת 

// function SortWords(arr){
//         return arr.sort();
    
//     }
//     let x = ["noam", 'ariel', 'avi', "daviv"]
    
//     console.log(SortWords(x))
    

// משימה שביעית

// function removeDuplicates(arr){
//     let result = [];

//     arr.forEach(num => {
//         if(!result.includes(num)){
//             result.push(num)
//         }
//     });

//     return result
// }

// const input = [1, 2, 3, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); 


// משימה שמינית 

// function getProductOfArray(arr) {
//     return arr.reduce((acc, curr) => acc * curr, 1);
//   }
  
//   const arr = [1, 2,2,4];
//   const product = getProductOfArray(arr);
//   console.log(product);
  

// משימה תשיעית 

// function filterNumbers(arr){
//     return arr % 2 !== 0
// }

// const ages = [1,2,3,4];
// const result = ages.filter(filterNumbers);
// console.log(result)

// משימה עשירית 

// function findMin(numbers) {
//     return numbers.reduce((min, current) => min < current ? min : current);
//   }
  
//   const numbers = [1, 2, 3, 4];
//   const min = findMin(numbers);
//   console.log(min); 
  

// משימה אחד עשרה

// function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length);
//   }
  

// const input = ['dog', 'elephant', 'cat', 'bird', 'ant'];
// const output = sortByLength(input);
// console.log(output);

// משימה שתים עשרה

// function countEvenNumbers(arr) {
//     let count = 0;
//     arr.forEach(function(num) {
//       if (num % 2 === 0) {
//         count = count + num;
//       }
//     });
//     return count;
//   }
// let x = [1,2,3,4,5]  
// console.log(countEvenNumbers(x))

// משימה שלש עשרה

// function filterAge(arr){
//     return arr.filter(function(persin){
//         return persin.age >= 18
//     })
// }

// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 17 },
//     { name: 'Bob', age: 21 },
//     { name: 'Alice', age: 16 }
// ]
// console.log(filterAge(people))

// משימה ארבעה עשרה

// function funT(arr){
//     return arr.map(num => {
//         return num * num
//     })
// }

// let array = [1,2,3,4]
// console.log(funT(array))

// משימה חמש עשרה

// function filterWord(arr){
//     return arr.filter((word) => {
//         return word.charAt(0).toLowerCase() === 'a';
//     })
// }
// let array = ['ariel', 'noam', 'Avi']
// console.log(filterWord(array))


// אובייקטים

// משימה ראשונה 

// function thePerson(obj){
//     let getFullName = `${obj.firstName} ${obj.lastName}`    
//     return getFullName
// }
// let Person = {age: 16, firstName: "ariel", lastName: "coral"}
// console.log(thePerson(Person))


// משימה שניה 

// function countCharacters(str) {
//     const counts = {};
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i]
//       counts[char] = counts[char] ? counts[char] + 1 : 1
//     }
//     return counts
// }

// let word = "hello"
// console.log(countCharacters(word))


// משימה שלישית 

// function returnNull(obj, key){
//     if(key in obj){
//         return obj[key]
//     }
//     else{
//         return null
//     }
// }

// const myObj = { name2: "John", age: 30 };
// console.log(returnNull(myObj, "name2"))
// console.log(returnNull(myObj,"ariel"))


// משימה רביעית 

// const counter = {
//     count: 0, 
//     increment() {

//       this.count++;
//     },
//     reset() {
//       this.count = 0;
//     }
//   };
  
// console.log(counter.count); 
// counter.increment();
// console.log(counter.count); 
// counter.reset();
// console.log(counter.count);
  

// משימה חמישית

// function priceInArray(arr){
//     let x = 0;
//     for(let i = 0; i < arr.length; i++){
//         x = x + arr[i].price
//     }
//     return x / arr.length 
// }
// let myArray = [
//     {theProduct: "computer", price: 999},
//     {theProduct: "headphones", price: 399},
//     {theProduct: "table", price: 899}]
// console.log(priceInArray(myArray))    


// משימה שישית 

// function CalculatingAreaRectangle(obj){
//     return obj.Length * obj.width
// }
// let myObj = {Length: 4, width: 10}
// console.log(CalculatingAreaRectangle(myObj))

// משימה שביעית

// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
//     getInfo() {
//       return `${this.title} by ${this.author} (${this.year})`
//     }
// }
  
//   console.log(book.getInfo())

// משימה שמינית 


//  function a(obj1, obj2){
//      const merged = {}

//      for(let key in obj1){
//          if(obj2.hasOwnProperty(key)){
//              merged[key] = [obj1[key], obj2[key]]
//          }else{
//              merged[key] = obj1[key]
//          }
//      }

//      for(let key in obj2){
//          if(!merged.hasOwnProperty(key)){
//              merged[key] = obj2[key]
//          }
//          return merged
// }
// }

//  let x = {a:1,b:2,d:4}
//  let z = {a:5,b:3}
// console.log(a(x,z))


// משימה תשיעית

// function sortScoresDescending(scores) {
//     scores.sort(function(a, b) {
//       return b.grade - a.grade;
//     })
  
//     return scores
// }
  
// let myArray = [
//     {name: "ariel", grade: 96},
//     {name: "noam", grade: 100},
//     {name: "avi", grade: 34}
// ]
// console.log(sortScoresDescending(myArray))

// משימה עשירית

// function swapKeysAndValues(obj) {
//     const swappedObj = {};
//     for (const key in obj) {
        
//     }
//     return swappedObj;
//   }
  

// let myObj = {a:1, b:2, c:3}
// console.log(swapKeysAndValues(myObj))
