// function moveZeros(arr) {
//   const zeros = arr.filter(e => e === 0)
//   const withoutZeros = arr.filter(e => e !== 0)
//   return [...withoutZeros, ...zeros]
// }


// function moveZeros(arr) {
//   return [...arr.filter(e => e !== 0), ...arr.filter(e => e === 0)]
// }

const moveZeros = (arr) => [...arr.filter(e => e !== 0), ...arr.filter(e => e === 0)]

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));