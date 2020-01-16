//https://www.codewars.com/kata/57be674b93687de78c0001d9/train/javascript
function largestPower(n){
for (x = 0; x < 999; x++)
    if (Math.pow(3,x) >= n)
      return x - 1;
}