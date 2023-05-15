var merge = function(nums1, m, nums2, n) {
  let arr = []
  for (let i = 0; i < m; i++) {
    arr.push(nums1[i])
  }
  for (let i = 0; i < n; i++) {
    arr.push(nums2[i])
  }

  nums1.splice(0, nums1.length)
  nums1.push(...arr.sort())
};



let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
merge(nums1, 3, nums2, 3)
console.log(nums1);








var merge = function(nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
      nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
};




var merge = function(num1, m, num2, n) {
  let j=0
       for(let i=m;i<m+n;i++){
               num1[i]=num2[j]
               j++
       }
console.log(num1.sort((a,b)=>a-b))
};



























// const merge = (nums1, m, nums2, n) => {
//   // let j = 0

//   //   for (let i = 0; i < (m+n); i++) {
//   //     console.log(nums1[i+1]);
//   //       if (nums1[i] <= nums2[j] && (nums1[i+1] > nums2[j] || nums1[i+1] == 0 || nums1[i+1] === undefined)) {
//   //           nums1.splice(i+1, 0, nums2[j])
//   //           nums1.pop()
//   //           j++
//   //       }
//   //   }

//   let arr = []
//   for (let i = 0; i < m; i++) {
//     arr.push(nums1[i])
//   }
//   for (let i = 0; i < n; i++) {
//     arr.push(nums2[i])
//   }

//   nums1.splice(0, nums1.length)
//   nums1.push(...arr.sort())


//   // let arr1 = nums1.filter(e => e !== 0).slice(0, m)
//   // let arr2 = nums2.filter(e => e !== 0).slice(0, n)
//   // let arr = [...arr1, ...arr2]
//   // nums1.splice(0, nums1.length)
//   // nums1.push(...arr.sort())

// }




// let nums1 = [1,2,3,0,0,0]
// let nums2 = [2,5,6]
// merge(nums1, 3, nums2, 3)

// // let nums1 = [0]
// // let nums2 = [1]
// // merge(nums1, 0, nums2, 1)

// console.log(nums1);


// // const merge = (nums1, m, nums2, n) => {
// //   let arr1 = nums1.filter(e => e !== 0).slice(0, m)
// //   let arr2 = nums2.filter(e => e !== 0).slice(0, n)
// //   let arr = [...arr1, ...arr2]
// //   return arr.sort()
// // }


// // const merge = (nums1, m, nums2, n) => {
// //   return [...nums1.filter(e => e !== 0).slice(0, m), ...nums2.filter(e => e !== 0).slice(0, n)].sort()
// // }

