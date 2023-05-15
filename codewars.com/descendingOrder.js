function descendingOrder(n){
  // const sn = n.toString().split('').map(Number).sort((a,b) => (b - a));
  // return parseInt(sn.join(''));

  return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(11421));

