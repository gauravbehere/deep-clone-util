# deep-clone-util
Utility to deep clone javascript objects

[![npm version](https://badge.fury.io/js/deep-clone-util.svg)](https://badge.fury.io/js/deep-clone-util)
![Node.js CI](https://github.com/gauravbehere/deep-clone-util/workflows/Node.js%20CI/badge.svg)

 ## Clone - JS utility to deep clone an object
 With deep cloning becoming a regular practice & a required thing for supporting immutability, deep-clone-util provides a way just to do that.
 - No dependeny on any library
 - 2kB of unzipped bundle size
 
 ### Supports cloning of:
 -  Elementary values
 -  Array, Objects (nesting upto any level)
 -  Functions
 -  Promises
 -  Dates
 -  Regular expressions
 -  Maps & Sets

 ### Todo
 -  Support circular references
 -  Suppprt more object types

 ### Installation
 ``` npm i deep-clone-util ```

### Examples
```
const clone = require('deep-clone-util');
const obj = {
 a: 1,
 b: "string",
 c: function(a) {console.log(a)},
 d: [1,2,3],
 f: {
  g: 1
 }
}

const clonedObj = clone(obj)
obj.f.g = 10
console.log(obj.f.g) // Prints 1
```


### Contributions
  - Author: Gaurav Behere
- Please raise a PR, if you see some improvement possible.
