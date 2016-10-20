# Morning Exercise - Arrays!
![Array](https://docs.oracle.com/javase/tutorial/figures/java/objects-tenElementArray.gif)

## Introduction
We are going to jumpstart our morning with some fun exercises using arrays and going over some of their useful functions.

## Setup
We will be working strictly in the terminal using the Node REPL. To access the REPL, simply open up your terminal and type in `node` then hit enter (**Doesn't matter what directory you are currently working in**). _Note: to close the REPL just type `.exit` and then hit enter._

## Assignment
You will need to look up the [array object documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to lookup some of the following functions needed. Finish as much as you can in the 45 allotted minutes and then we'll go over when we are done.

1. Spend the next 10 minutes going over the documentation.
<br><br>
1. Given the following array
```javascript
var instructors = ['Bryan','Heidi','John','Tims', 'Jared', 'Jason'];
```
  - Find a method to remove `'Jason'` from the array (he's an imposter), and then using another array method to add `'Nick'`.
  - If I wanted the last element of `instructors` without knowing the value of index that it sits in, how would I get it?
<br><br>
1. Look up the functions `indexOf()` and `includes()`in the documentation. Both of these functions can be used to see whether or not an array contains an element. What range of values do both of them return and how are they different?
<br><br>
1. Run the following command:
```javascript
Array(16).join('Na') + " Batman!"
```
  - What does it return?
  - What does `Array(n)`, where `n` is an arbitrary number return?
  - What does `join()` do?
<br><br>
1. What do `shift()` and `unshift()` do?
  - How do you use them?
<br><br>
1. Run the following code:
```javascript
var str = "...won tnereffid skool siht ,haoW"
// 1.
str = str.split('');
// 2.
str = str.reverse();
// 3.
str = str.join('');
// 4.
console.log(str);
```
  - What do `split()`, `reverse()`,and `join()` return?
  - What data type is the state of `str` at: `1.`, `2.`, `3.`, and `4.`?
<br><br>
1. Looking at the documentation, how would you sort this array in alphabetical order? What about reverse alphabetical order?
``` javascript
var instructors = ["John", "Jared", "Bryan", "Heidi", "Tims", "Nick"];
```
1. Run the following code:
``` javascript
// 1.
var nums = [1,2,3,4,5,6,7,8,9,10];
// 2.
var evens = nums.filter(function(n) {
  return n % 2 === 0;
});
// 3.
var big = nums.filter(function(n){
  return n > 4;
});
// 4.
console.log(evens);
console.log(big);
```
  - What does `.filter()` return?
  - What does `.filter()` take as an argument?
  - How is .filter different than .map?
