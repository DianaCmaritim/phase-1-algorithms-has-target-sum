function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    let number = array[i]
    for (let n = i + 1; n < array.length; n++){
      let number = array[i];
      if ((number + array[n]) === target) return true

    }

  }
  return false
}



/*
  Write the Big O time complexity of your function here
*/
//for loop iteration==>O(n),O(n) + O(1)(constant time)
//---when we remove the constantsit gives;
//Big O time complexity of this function O(n²)
/*
  Add your pseudocode here
  // iterate over the array of numbers
    // for the current number, identify a number that adds to our target
    // iterate over the remaining numbers in the array
    // check if any of the remaining numbers is the complement
    // if so, return true
    // if we reach the end of the array, return false


  iterate through each number in the array
*/

/*
  Add written explanation of your solution here
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
}

module.exports = hasTargetSum;
