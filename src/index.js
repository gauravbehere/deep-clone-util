const getRegExPatterns = (source) => {
  let patterns = ""
  if(source.global) {
    patterns += 'g'
  }
  if (source.ignoreCase) {
    patterns += "i"
  }
  if (source.multiline) {
    patterns += "m"
  }
  return patterns
}

/**
 * Clone - JS utility to deep clone an object
 * Supports cloning of:
 * 1. Elementary values
 * 2. Array, Objects (nesting upto any level)
 * 3. Functions
 * 4. Promises
 * 5. Dates
 * 6. Regular expressions
 * 7. Maps & Sets
 * 
 * @param {*} obj, object to clone
 * @module clone
 * @exports clone
 */
const clone = (obj) => {
  'use strict'
  let clonedObj = {}
  // Takes care of null, undefined
  if (!obj) return obj
  // If obj is elementary (neither Array nor Object)
  if (typeof obj !== 'object') {
    return obj
  }
  // If obj is a date
  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }
  // If obj is an Array
  if (Array.isArray(obj)) {
    let clonedArr = []
    obj.forEach((item) => {
      clonedArr.push(clone(item))
    })
    return clonedArr
  }
  // If obj is a Set
  if (obj.constructor.name.toString() === 'Set') {
    let setToReturn = new Set()
    obj.forEach(e => {
      setToReturn.add(clone(e))
    })
    return setToReturn
  }
  // If obj is a Map
  if (obj.constructor.name.toString() === 'Map') {
    let mapToReturn = new Map()
    obj.forEach((value, key) => {
      let newKey = clone(key)
      mapToReturn.set(newKey, clone(value))
    })
    return mapToReturn
  }
  // If obj is a RegExp
  if (obj.constructor.name.toString() === 'RegExp') {
    let regExToReturn = new RegExp(obj.source, getRegExPatterns(obj))
    regExToReturn.lastIndex = obj.lastIndex
    return regExToReturn
  }
  // If obj is a Promise
  if (obj.constructor.name.toString() === 'Promise') {
    let promiseToReturn = new Promise((resolve, reject) => {
      obj.then(res => {
        resolve(clone(res))
      }, err => {
        reject(clone(err))
      })
    })
    return promiseToReturn
  }
  // If obj is an Object
  for (const key in obj) {
    clonedObj[key] = clone(obj[key])
  }
  return clonedObj
}

exports = module.exports = clone
