function findOutlier(i) {
  return (i.filter((a) => a % 2 === 0).length > 1) ? 
    parseInt(i.filter((a) => a % 2 !== 0)) 
  : parseInt(i.filter((a) => a % 2 === 0))
}
console.log(findOutlier([0, 1, 2]));