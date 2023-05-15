function dirReduc(arr) {
  const opposite = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST',
  }
  
  return arr.reduce((acc, el) => {
    if (opposite[el] === acc[acc.length - 1]) {
      acc.pop()
    } else {
      acc.push(el)
    }
    return acc
  }, [])
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));




// function dirReduc(arr) {
//   var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
//   while (pattern.test(str)) str = str.replace(pattern,'');
//   return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
// }
