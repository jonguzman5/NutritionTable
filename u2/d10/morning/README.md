
![](http://network.napco.com/target-marketing/wp-content/uploads/sites/3/2016/02/job_inteview_funny.jpg)
# 10 Javascript Interview Questions You Should Know!


1) What should the following code output? Explain this behavior.

```
(function(){
    var a = b = 3;
})();

console.log(a);
console.log(b);
```
I initially thought the problem was the way the function was being invoked.


2) Consider the code below. Will they return the same thing? Why or why not?

```
function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return
  {
    bar: "hello"
  };
}
```
Yes, because the only thing that changed was the location of a couple of brackets.
The spacing did affect the outcome

3) In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
```
(function() {
 console.log(1);
 setTimeout(function(){console.log(2)}, 1000);
 setTimeout(function(){console.log(3)}, 0);
 console.log(4);
})();


```
1,3,2,4 because 2 has a 1 second delay, 3 has no delay and 4 will run normally.
1,4,3,2 because the ones without a delay will run first and then the ones with a delay.

4) What will be the output when the following code is executed? Explain.
```
console.log(false == '0') //equal
console.log(false === '0') //identical
```
true, false 
true because 0 is false
false because 0 is not equal to false.

5) What’s the result of executing this code and why.
```
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```
first function will return undefined because var a isn't defined until after the console logs.
while the second will return 2 because you're only asking to return that integer
correct

6) What is the best feature of Internet Explorer?
N/A

7) Write a function to deliver the expected output
```
duplicate([1,2,3,4,5]);
  => [1,2,3,4,5,1,2,3,4,5]
  ```
  var duplicate = funtion(num){
    return num.concat(num)
  }
  duplicate([1,2,3,4,5]);

  8) Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.


  9) Explain "hoisting".

  10) What is a ternary operator? Show an example.
var test = (0===0)
test ? console.log("true") : console.log("false")

100 > 35 ? console.log('yes') : console.log('no');
