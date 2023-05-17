function fizzBuzz (num) {
  let output = '';
  for (let i = 1; i <= num; i++) {
    output = output + '\n'+ i + ' ';
    if (i % 2 == 0) { output = output + 'Fizz' } 
    if (i % 5 == 0) { output = output + 'Buzz' } 
  }
  return output;
}
console.log(fizzBuzz(10));

