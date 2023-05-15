function isTriangle(a,b,c){
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  } else { return true; }
}
console.log(isTriangle(1,3,3));



function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}