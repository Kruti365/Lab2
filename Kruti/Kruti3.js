//https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript
function dbSort(a){
// Code here

let arrayNumber=a.filter(x=> typeof x=="number");
let arrayStrings=a.filter (y=>typeof y=="string");

return arrayNumber.sort((b,c)=>b-c).concat(arrayStrings.sort());

 }