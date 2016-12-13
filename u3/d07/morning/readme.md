![](http://i.giphy.com/l0FeaAqTD4l8fMR68.gif)


# Morning Ex - Blocks & Procs

## Intro
We know what blocks are in Ruby, a section of code that is wrapped in curly braces or do/end statements.

```
3.times { puts "Goooood Morning!" }

n = nil
while !n do
  puts "I'm a block!"
  n = true
end
```
The above code has two blocks - one after `3.times` and one inside of the while loop. Blocks are super useful in Ruby, but today we will explore `Procs`.

`Procs` are `reusable blocks`. Normally, blocks are not really objects and they can't be called on or reused. By utilizing `procs` we can make blocks first-class-citizens-ish (kinda like callbacks in JS!).

## Assignment

##### 1. Spend about 10 minutes looking at the [documentation for procs](https://ruby-doc.org/core-2.2.0/Proc.html). Learn a little bit about them before tackling the following problems.

##### 2. Our first proc
Given the following code, rewrite these methods using a proc! `Hint` - use the `Proc.new` keyword to make a proc, and call it with `(&proc_name)`. You should be able to write one proc that will work for all both methods.

```
people_one = [53, 28, 17, 87, 62, 12, 31, 9]

over_eighteen = people_one.select { |age| age > 18 }

under_eighteen = people_one.reject do |age|
  age > 18
end

puts "over eighteen #{over_eighteen}"
puts "under eighteen  #{under_eighteen}"
```


##### 3. Passing a proc into a method
For this problem create two procs. One called `add`, which adds 2 numbers together, and one called `multiply`, which multiplies two numbers together. Each proc should `puts` the result

Everything is set up in this problem other than the procs. Declare them before the doSomeMath method.
```
def doSomeMath pass_a_proc, a, b
  pass_a_proc.call(a,b)
end

doSomeMath(add, 1, 52) #=> should puts 53
doSomeMath(multiply, 5, 2) #=> should puts 10
```


##### 4. Procs and the yield keyword
The yield keyword is another tool we can use to pass in a block of code to a method. Example:
```
def print_once
  yield
end

print_once { puts "HOLD THE DOOR" }
```

We can also pass a proc in here instead of just a normal block. The yield keyword will run the proc as many times as we want, also.
```
def print_five_times
  yield
  yield
  yield
  yield
  yield
end

hodor = Proc.new { puts "HOLD THE DOOR" }
print_five_times &hodor
```

Create a new proc that will print true if a number is even and false if it is odd. Yield this proc inside a method called `is_it_even`. This method should take both the yielded block and a number as arguments.
