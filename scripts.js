"use strict";
// let userName: string = "usman";
// console.log(userName);
// let square = (a: number): number => {
//     return a * a
// }
// console.log(square(5)) // OUTPUT 25;
// let multiply = (a: number, b:number) : number => {
//     return a*b
// }
// console.log(multiply(5,10));// output 50
// let sayHello = (name: string) : string => {
//     return `Hello ${name} !`
// }
// console.log(sayHello("usman"));// Hello usman !
// let even = (num: number) : boolean =>{
//     return num & 1 ? false : true
// }
// console.log(even(5));//false
//conditions practice
// let num : number = 0;
// if(num < 0){
//     console.log("negative");
// } else if(num > 0){
//     console.log("positive");
// }else {
//     console.log("zero"); 
// }
// let season: number = 2
// switch (season) {
//     case 1:
//         console.log("Winter");
//         break;
//     case 2:
//         console.log("Spring");
//         break;
//     case 3:
//         console.log("summer");
//         break;
//     case 4:
//         console.log("Fall");
//         break;
//     default:
//         console.log("invalid Season");
//         break;
// }
// let fruits: string = "mango";
// switch (fruits) {
//     case "apple":
//         console.log("This season is for Apple");
//         break;
//     case "banana":
//         console.log("This season is for Banana");
//         break;
//     case "orange":
//         console.log("This season is for Orange");
//         break;
//     default:
//         console.log("This is not a fruit season");
//         break;
// }
//loops started
// let count: number = 0;
// while (count <= 5) {
//     console.log(`count is ${count}`);
//     count++;
// }
// let num: number = 5;
// do {
//     console.log(`Number is ${num}`);
//     num++
// } while (num < 5)
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// let num = 2; // Start with the first even number
// while (num <= 10) { // Continue as long as num is less than or equal to 10
//     console.log(num); // Print the current value of num
//     num += 2; // Increment num by 2 to get the next even number
// }
// type iteratesType = {
//     a: number, b: number, c: number
// }
// let iterates: iteratesType = { a: 1, b: 2, c: 3 };
// for (const key in iterates) {
//     console.log(`${key} : ${iterates [key as keyof iteratesType]}`);
// }
// let arr: string[] = ["Apple", "Banana", "Orange"]
// for (const fruit of arr) {
//     console.log(fruit);
// }
// let arr: number[] = [2,5,6,9,10,25]
// arr.forEach(num => {
//     if(num % 2 === 0){
//         console.log(num);
//     }
// });
const colorNames = [
    "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White"
];
colorNames.pop();
colorNames.shift();
for (let i = 0; i < colorNames.length; i++) {
    console.log(colorNames[i]);
}
