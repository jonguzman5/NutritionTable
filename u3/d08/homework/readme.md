# Homework - Pig Latin

![Pig Speaking Latin](http://www.ccalanguagesolutions.com/wp-content/uploads/2013/12/pig-300x248.jpg)

## Introduction

Tonight we will continue out journey into RSpec and Test Driven Development!
(_hold for applause_)

## Setup

Write a Word class in the lib/word.rb file that meets the requirements specified by the RSpec tests.

All of the rspec has been supplied for you in the `spec` directory. You will be doing all of your work in the `word.rb` file in the `lib` directory.

To test your Word class, run `rspec` in the homework directory.

Once you have your first test passing, go into the spec/word_spec.rb file and remove the `x` before the next test. Do this after each test.

## Completion
Parts 1-3

## Assignment

#### Part 1

Your job will be to implement a Word class with an instance method `Word#to_pig` that returns the pig latin equivalent of the word. The specs are written for you.

Description of the rules from Wikipedia:

For words that begin with vowel sounds or silent letter, "way" is added at the end of the word. Examples are

* "egg" → "eggway"
* "inbox" → "inboxway"
* "eight" → "eightway"

For words that begin with consonant sounds, the initial consonant or consonant cluster is moved to the end of the word, and "ay" is added, as in the following examples:

* "happy" → "appyhay"
* "duck" → "uckday"
* "glove" → "oveglay"


#### Part 2

The letter 'y' can play the role of either consonant or vowel, depending on its location

* "yellow" → "ellowyay"
* "rhythm" → "ythmrhay"

#### Part 3

How do you deal with words starting with "qu" or "squ" ?

* "queen" → "eenquay"
* "squeal" → "ealsquay"

# Bonus
Have the Word class inherent from the class String
