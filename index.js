// console.log("working");

// //...1... What are promises and why do we need them?  - Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// var promise = new Promise(function(resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.
// then(function() {
//     console.log('Success, You are a GEEK');
// }).
// catch(function() {
//     console.log('Some error has occurred');
// });

// //....2....What is the purpose of async/await keywords?  - The async keyword turns a method into an async method, which allows you to use the await keyword in its body. When the await keyword is applied, it suspends the calling method and yields control back to its caller until the awaited task is complete. await can only be used inside an async method.
// // a promise
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Promise resolved')
//     }, 4000);
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise;

//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();

// //...3.... What is hoisting? - JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.
// catName("Tiger");

// function catName(name) {
//     console.log("My cat's name is " + name);
// }


//...4...What is the DOM? -he Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
// function printvalue() {
//     var name = document.form1.name.value;
//     alert("Welcome: " + name);
// }


// //....5.... Difference between undefined vs not defined vs NaN?  -- null is an object with a valid non-existent value and it is non-mutable while object type of an undefined value is in itself undefined. Also any arithmetic operation with null value will result in integer value while any arithmetic operation with undefined with result in value of variable being changed to NaN.

// console.log(a);
// var a = 5;
// console.log(a); //undefined

// console.log(a);
// var a = 5;
// console.log(a);
// console.log(b);

//....6..... How many operators do we have in JS ?  -- three logical operators: and, or, and not. 
//used to “reason” about Booleans    
// && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true

// JavaScript Operators are as rich as what you'd expect from any modern language. There are four categories: arithmetic, comparison, assignment, and logical.

//Logical operators -- JavaScript supports three logical operators: and, or, and not. These can be used to “reason” about Booleans.  he && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true. ("&&","||","!"  

// Arithmetic Operators
// Arithmetic operators perform basic computations on their operands (the variables they operate on). In the table below, variable a has a value of 2 before the operation is applied.  ("+","-","/","*","++","%","--")

//Comparison Operators -- Comparison operators compare the value of two operands. If the comparison is true, they return true, otherwise false. In the table below the variables  ("==","!=",">=","<=","<",">")

// Assignment Operators -- assignment operation the value of a variable is computed from the expression that lies to the right of an assignment operator. That value is assigned to the variable or property that is on the left side of the operator ("=","+=","-=","/=","%=","*=" )


//....7....What are pure functions?
// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program's execution. Rather, it only depends on its input arguments
// Also a pure function does not produce any observable side effects such as network requests or data mutation
//What are pure and impure functions?
// An impure function is a function that contains one or more side effects. A pure function is a function without any side effects.

//....7....What is callback hell -- This is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain.
// Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other. By nesting callbacks in such a way, we easily end up with error-prone, hard to read, and hard to maintain code.Soln: Best code practice to handle it.

const callbackhell = () => {

    setTimeout(() => {
        console.log("call");

        setTimeout(() => {
            console.log("back");

            setTimeout(() => {
                console.log("hell");

            }, 3000);

        }, 2000)

    }, 1000);
}

callbackhell();

// ....8....What is promise chaining == Promise chaining: Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order. This is great for complex code where one asynchronous task needs to be performed after the completion of a different asynchronous task.

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
}).then(function(result) {

    alert(result);
    return result * 2;

}).then(function(result) {

    alert(result);
    return result * 2;

}).then(function(result) {

    alert(result);
    return result * 2;

});

//....9.....What are arrow functions? - Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example, This function // function expression let x = function(x, y) { return x * y; }

let age = 5;

let welcome = (age < 18) ?
    () => console.log('Boy') :
    () => console.log('Adult');

welcome();

let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5, 7);
console.log(result1);

//....10.... Give an example of async/await

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise;


    alert(result);
}

f();