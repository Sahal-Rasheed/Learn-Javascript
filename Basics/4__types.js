// Type Conversion

/**
 // 1. Implicit Conversion
 * Implicit type conversion occurs when an operation is performed on operands of different types, and JavaScript automatically converts one or both operands to a common type.
 string + string = string
 number + number = number
 number + string = string
 boolean + boolean = boolean
 boolean + string = string
 boolean + number = number
 string - string = number|NaN - console.log("1"-"2"); => -1, console.log("hello"-"world"); => NaN
 console.log('5' - null) => 5 - null => 0
 console.log('5' - undefined) => NaN
 */

/**
 // 2. Explicit Conversion
 * Explicit conversion is when the developer manually converts a value from one type to another using built-in functions or constructors.
 To Number:
  - Number() - console.log(Number(true)) => 1
  - parseInt() - console.log(parseInt('3')) => 3
  - parseFloat() - console.log(parseFloat('3.14')) => 3.14
 To String:
  - String() - console.log(String(null)) => 'null', console.log(String(undefined)) => 'undefined', console.log(String(true)) => 'true'
  - .toString() - console.log((500).toString()) - wont work on null or undefined
 To Boolean:
  - Boolean() - null, undefined, 0, '' will return false when converted to boolean
 */
