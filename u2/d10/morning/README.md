
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

3) In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
```
(function() {
 console.log(1);
 setTimeout(function(){console.log(2)}, 1000);
 setTimeout(function(){console.log(3)}, 0);
 console.log(4);
})();
```

4) What will be the output when the following code is executed? Explain.
```
console.log(false == '0')
console.log(false === '0')
```

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

6) What is the best feature of Internet Explorer?


7) Write a function to deliver the expected output
```
duplicate([1,2,3,4,5]);
  => [1,2,3,4,5,1,2,3,4,5]
  ```

  8) Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

  9) Explain "hoisting".

  10) What is a ternary operator? Show an example.
