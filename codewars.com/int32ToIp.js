function int32ToIp(int32) {
  let binary = (int32 >>> 0).toString(2);
  
  while (binary.length < 32) {
    binary = '0' + binary;
  }
  
  const octets = [
    parseInt(binary.substr(0, 8), 2),
    parseInt(binary.substr(8, 8), 2),
    parseInt(binary.substr(16, 8), 2),
    parseInt(binary.substr(24, 8), 2)
  ]
  
  return octets.join('.')
}
console.log(int32ToIp(2154959208));



// const int32ToIp = int32 => [24, 16, 8, 0].map(e => int32 >> e & 255).join('.');

// function int32ToIp(int32){
//   return (int32>>>24) + '.' + (int32<<8>>>24) + '.' + (int32<<16>>>24) + '.' + (int32<<24>>>24)
// }