

function highAndLow(numbers){
  const str = numbers.split(' ').map(Number).sort((a, b) => (b - a)) 
  return str[0] + ' ' + str[str.length - 1]
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));