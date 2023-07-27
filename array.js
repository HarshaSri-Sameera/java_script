let nums = [1,2,3,4,5,6,84,31,3,4,23,4,4,5,2,5,6,7,3,5,2]
let alphas = ["Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW"]

// remove duplicates
// 1) using set
let res = [...new Set(nums)];
let res1 = [...new Set(alphas)];
console.log(res,"\n",res1);

// 2) Using filter
let res2 = nums.filter((num, i) => {
    return (nums.indexOf(num) === i)
})
let res3 = alphas.filter((word, i) => {
    return (alphas.indexOf(word) == i)
})
console.log(res2,"\n",res3);

// count duplicates
//1)Using forEach() 
let res4 = {};
let res5 = nums.forEach((num) => {
    res4[num] = (res4[num] || 0) + 1;
})
let res6 = {};
let res7 = alphas.forEach((word) => {
    res6[word] = (res6[word] || 0) + 1;
})
console.log("\n", res4, "\n", res6);

//2) Using map and filter
let res8 = [...new Set(nums)];
let res9 = res8.map(value => [value, nums.filter(num => num === value).length]);
console.log(res9);

let res10 = [...new Set(alphas)]
let res11 = res10.map(value => [value, alphas.filter(alpha => alpha === value).length]);
console.log(res11);



// output:
// node /tmp/vp2HvRJtGU.js
// [
//   1,  2,  3,  4, 5,
//   6, 84, 31, 23, 7
// ] 
//  [ 'Saab', 'Volvo', 'BMW' ]
// [
//   1,  2,  3,  4, 5,
//   6, 84, 31, 23, 7
// ] 
//  [ 'Saab', 'Volvo', 'BMW' ]
// {
//   '1': 1,
//   '2': 3,
//   '3': 3,
//   '4': 4,
//   '5': 4,
//   '6': 2,
//   '7': 1,
//   '23': 1,
//   '31': 1,
//   '84': 1
// } 
//  { Saab: 2, Volvo: 2, BMW: 2 }
// [
//   [ 1, 1 ],  [ 2, 3 ],
//   [ 3, 3 ],  [ 4, 4 ],
//   [ 5, 4 ],  [ 6, 2 ],
//   [ 84, 1 ], [ 31, 1 ],
//   [ 23, 1 ], [ 7, 1 ]
// ]
// [ [ 'Saab', 2 ], [ 'Volvo', 2 ], [ 'BMW', 2 ] ]
