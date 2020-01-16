
//https://www.codewars.com/kata/5bdc191306a8a678f6000187/train/javascript
function shiftLeft(s, t){
  // your code here
 let x = 0
  while(s !== t) {
  (s.length > t.length) ? s = s.substr(1) : t = t.substr(1);
     x++;
  }
  return x;


}