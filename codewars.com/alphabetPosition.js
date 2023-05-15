

function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const str = text.toLowerCase().match(/[a-z]+/g)
  const nums = str !== null ? str.join('').split('').map(e => alphabet.indexOf(e)).join(' ') : null
  return nums;
}
console.log(alphabetPosition('43'))
