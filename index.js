function hasTargetSum(array, target) {
  // Write your algorithm here
  //We have a function hasTargetSum, which passes two arguments; an array and a target.
  //Our array contains numbers which when either of the pair is added sums to our target.
  //Then our function should return true.
  //If we pair any random numbers and they are not equal to our target then return false.
  //Suppose we have [2,4,6,9,3] as our string, and 15 as our target.
  //Then 2 and 4 returns false; 3 and 9 returns false; 6 and 9 is 15,returns true.
  for (let i = 0; i < array.length; i++) {
    const comp = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === comp) return true;
    }
  }
  return false;
}
hasTargetSum([3, 8, 12, 4, 11, 7], 10);
hasTargetSum([22, 19, 4, 6, 30], 25);
hasTargetSum([1, 2, 5], 4);
hasTargetSum([6, 8, 12], 22);

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate through each number in the array
   identify an complement that adds to the target for the current number(comp = target - array[i])
   iterate through the rest of the array
    check if any number is our complement
    return true if it meets this condition

  if end of array and complement not found return false

  
*/

/*
  Add written explanation of your solution here
  Our function needs us to have the current number in the array which when is summed up to 
  another number(complement) in the array gives us the target number. If so, it returns: else returns
  false. So, we first have to iterate through the array starting at index 0. This allows us to use the 
  array iteration function for. Remember, even as we iterate our current number is looking for a number, which when added to
  it equals the target. To find this number(complement), our  current number(array[i]) should be subtracted from the target number.
  To iterate through the rest of the array, we nest another for loop. This checks if any number is our complement and returns true
  if it finds one.
  If the loop ends and there is no complement to add to our current numbers, then returns false. We finally have to call our function
  by passing arguments in the place of our parameters to get our value.

  
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

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([6, 8, 12], 22));

  console.log("");
}

module.exports = hasTargetSum;
