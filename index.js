function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNum = {}
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]

    if(seenNum[complement]) return true 

    seenNum[array[i]] = true
  }
  return false
}

console.log(hasTargetSum([1, 2, 5, 2, 8, 4], 10)
)
/* 
  Write the Big O time complexity of your function here:
  The Big O complexity is O(n) of iterating array onlt one time 
*/

/* 
  Add your pseudocode here:

  make an rmpty object 'seenNum'

  iterate array using i:
    assignet complement with target add with array index

    check in object if there is complement number

    add array index to the object and make value true 

  return false 
*/

/*
  Add written explanation of your solution here:

  - make seenNum ojbject to include all iterated numbers 
  - iterating array 
  - assiging complelemnt variable by adding target with array[i]
  - check the in object if there is the complement number to comlete the target 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 5, 2, 5], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 3, 3, 3], 12));
}

module.exports = hasTargetSum;
