function findOdd(A) {
  let odd
  A.forEach(element => { 
    const n = A.filter(e => e === element)
    if ( n.length % 2 !== 0 ) { odd = element }
  }); 
  return odd
}
console.log(findOdd([0,1,0,1,0,1]));

// console.log(4 % 2 !== 0);