function persistence(num) {
  let arr = num.toString().split('')
  let i = 0;
  while (arr.length > 1) {
    arr = arr.reduce((i, j) => i * j).toString().split('')
    console.log(arr);
    i++
  }
  return i
}

console.log(persistence(99));