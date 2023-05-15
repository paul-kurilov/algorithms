// function spinWords(string){
//   const words = string.split(' ')
//   const newStr = words.map(e => {
//     if (e.length >= 5) {
//       return e.split('').reverse().join('')
//     } else { return e}
//   }).join(' ')
//   return newStr
// }


function spinWords(string){
  return string.split(' ').map(e => (e.length >= 5 ? e.split('').reverse().join('') : e)).join(' ')
}


console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));