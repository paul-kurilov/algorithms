const merge = function(nums1, m, nums2, n) {
  const arr = [...nums1, ...nums2];
  return arr.sort()
};
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
