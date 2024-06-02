/* Date Object - obj = new Date(); */

// currrent date
const currentDate = new Date();
console.log(currentDate);        // 2024-05-16T14:03:26.945Z

// passing date as string - yyyy-mm-dd format
const startDate2021 = new Date("2021-01-01");
console.log(startDate2021);      // 2021-01-01T00:00:00.000Z

// convert date to string - (toString | toDateString)
const date = new Date();
console.log(date.toString());     // Thu May 16 2024 19:36:32 GMT+0530 (India Standard Time)
console.log(date.toDateString()); // Thu May 16 2024

// get methods - getFullYear, getMonth, getDate etc
console.log(date.getFullYear());  // 2024
console.log(date.getMonth());     // 4
console.log(date.getDate());      // 16
console.log(date.getDay());       // 4 (i.e Thursday)
console.log(date.getHours());     // 19
console.log(date.getMinutes());   // 38
console.log(date.getSeconds());   // 32
console.log(date.getMilliseconds()); // 663

// set methods - setFullYear, setMonth, setDate etc
const createDate = new Date("January 1, 2020");
createDate.setFullYear(2024);
createDate.setMonth(5);
createDate.setDate(15);
console.log(createDate);          // Thu Jun 15 2024 00:00:00 GMT+0530
