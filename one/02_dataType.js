"use strict"; //treat all code as a new version

// alert(3+3) // we are using nodejs not browser

console.log("hello");

let name = "harsh"
let age = 23
let islogedin = true

// number => 2 to 53
// BigInt
// string =>""
// Boolean
// null -> stand alone value
// undefined -> value not assignend
// Symbol -> unique

// Object

// console.log(typeof null);  -> object
// console.log(typeof undefined); -> undefined



// dataType -> Premitive -> string , number , boolean , null , undefined, symbol , bigint
//          -> Non Premitive (refervence type) -> Array, objects, functions

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

// const hero = [1,2,4,6,7,3];
// let obj = {
//     name: "harsh",
//     age: 23,
// }

// const myfun = function(){
//     console.log("wdefgh");
// }


// ******************************************

// stack memory ( Primitive ) -> get copy of value
// Heap memory (non premitive) -> get reference of value 


let user1 = {
    email : "asdf@gmail.com",
    upi: "sxdc@ybl"
}

let user2 = user1;
// if we change thwe vlaue of user2 then this will reflect in the vlaue of user1 as the value are get by referace
user2.email = "asdf@gmail.com"

console.log(user2);