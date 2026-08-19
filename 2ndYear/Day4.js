let s="Tanishque Tyagi Tyagi"
console.log(s.length)
let arr=[1,3,4];
console.log(arr.push(2)) //return the len of the update array
console.log(arr.slice(0,2))
console.log(s.toUpperCase());
console.log(s.toLowerCase())
console.log(s.slice(1,3))
console.log("Tanishque",s.indexOf("Tanishque"))//first index of Tanishque where it start
console.log("Tyagi",s.lastIndexOf("Tyagi")) // last index of Tyagi in the string 
console.log(s.split(" "))// split the string into array on basis of " "
console.log(s.replace("Tyagi",""))//replace the part of string with another 
console.log(s.concat(" Sarthak Srivastava")) //add the value to string and return 
console.log(s.includes("Tanishque")) //check the substring in string or not
//Array object 
let arr_obj=[{Name:'Tanishque',Roll:2503215300208},{Name:'Sarthak',Roll:2503215300174}]
console.log(arr_obj[0])
console.log(arr.pop())
console.log(arr)
//shift and unshift
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(0))
console.log(arr)
//Date
let date = new Date();
console.log(date)
console.log("Year=",date.getFullYear())
console.log("Month",date.getMonth()+1)
console.log("Date",date.getDate())
// Maths func
console.log("Maths",Math.PI)
let a=[10,2,3]
console.log("Max",Math.max(...a))
console.log("Min",Math.min(10,203,-19))
console.log("Power",Math.pow(2,3))
console.log("ceil",Math.ceil(34.4))
console.log("Floor",Math.floor(34.3))
