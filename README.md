# Node Assessment
This repo contains a node lib consisting of a number of algorithmic based problems + corresponding unit tests. We have included the function signature & some basic unit tests.

This was built using the following:
* yarn 1.22.10
* Node 12.16.3
* Jest 26.6.3
* No thought or consideration for best practices or concise code

## Instructions
* Create a fork of this repository in your own GitHub account
* Complete the algorithm problems **without** the use of any external libraries. You must make use of javascript functions only. We have set up the base project using Jest as the testing framework, but you can refactor this to use 1 of the following if you so choose:
    * Jasmine
    * Mocha + Chai
* You may also make use of npm if that is your preferred package manager
* Convert this javascript lib into a typescript lib (all code __and__ unit tests)
* Once complete, please send a link to your repository to tim@geminisolution.co.za and CC: elrika@geminisolution.co.za.

__Note:__
* We have provided some basic test input data, consider edge cases
* Do make use of the testing library to ensure well written, concise, clear & intent revealing tests (you can improve on the unit tests too)
* Read the instructions for each problem carefully

### **Duplicate Zeroes**
---------------------
Given an array of numbers, duplicate each occurrence of zero & shift the remaining elements to the right. Elements beyond the end of the array are not written.

Make modifications to the input array in place, do not return anything from your function.

#### Example 1:
|Input|[1,0,2,3,0,4,5,0]|
|-----|------------------|
|Output|null|
|Explanation|After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]|

#### Example 2:
|Input|[1,2,3]|
|-----|-------|
|Output|null|
|Explanation|After calling your function, the input array is modified to: [1,2,3]|

<br />

### **Is mountain array**
---------------------
Given an array of integers (`arr`), return true if and only if it is a valid mountain array & false otherwise.

Recall that `arr` is a mountain array if and only if:

* arr.length >= 3
* There exists some i with 0 < i < arr.length - 1 such that 1 side of the array steadily increases & the other steadily decreases

#### Example 1:
|Input|arr = [2,1]|
|-----|-----------|
|Output|false|

#### Example 2:
|Input|arr = [0,3,2,1]|
|-----|-----------|
|Output|true|

#### Example 3:
|Input|arr = [0,2,3,4,5,2,1,0]|
|-----|-----------|
|Output|true|

#### Example 4:
|Input|arr = [0,2,3,3,5,2,1,0]|
|-----|-----------|
|Output|false|

<br />

### **Merge sorted array**
----------------------
Merge the given 2 arrays into 1 sorted array.

The number of elements in `nums1` is provided in the variable `m` & the number of elements in `nums2` is provided in `n`. The variable `nums1` has an actual size of `n` + `m` & can hold all the elements when the 2 arrays are merged. Modify this array to provide the result.

#### Example 1:
|Input| nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3|
|-----|------------------|
|Output| [1,2,2,3,5,6]|

#### Example 2:
|Input|nums1 = [1], m = 1, nums2 = [], n = 0|
|-----|------------------|
|Output|[1]|
