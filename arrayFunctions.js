/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  //Your code here
  // if((numbers.length) % 2 === 0)
  // {
  //   console.log("even")
  //   return false;
  // }
  // else{
  //   console.log("odd")
  //   return true;
  // }

  return (numbers.length) % 2 !== 0;
}

isArrayLengthOdd([1, 2, 3, 4]);

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here

  // if((numbers.length) % 2 === 0)
  // {
  //   console.log("even")
  //   return true;
  // }
  // else{
  //   console.log("odd")
  //   return false;
  // }

  return (numbers.length) % 2 == 0;
}

isArrayLengthEven([1, 2, 3, 4])

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here

  instructors.push("Laila");
  console.log(instructors);

  return instructors;

}

 addLailaToArray(["Mshary", "Hasan"])

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
  let x = teams.pop();
  console.log(teams);
  console.log(x);
  return x;
}
eliminateTeam(["Brazil", "Germany", "Italy"])

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here

  const sliced = fruits.slice(fruits.length/2);

  if((sliced.length % 2) === 0)
  {
    console.log(sliced);
    return sliced;
  }  
  else
  {
    console.log([]);
    return [];
  }

  }

  

secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"])
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  // Your code here
  // const shoutArray = Array.from(shout);

  // //shoutArray.indexOf("!");
  // if (shoutArray.includes("!"))
  // {
  //   const x = shoutArray.indexOf("!");
  //   const sliced = shoutArray.slice(0, x+1);
  //   console.log(sliced);
    
  // }
  // else
  // {
  //   console.log(shout);
  //   return shout;
  // }


  //shoutArray.indexOf("!");
  if (shout.includes("!"))
  {
    const x = shout.indexOf("!");
    const sliced = shout.slice(0, x+1);
    console.log(sliced);
    return sliced;
    
  }
  else
  {
    console.log(shout);
    return shout;
  }
}

youGottaCalmDown("HI!!!!!!!!!!")
youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!")
youGottaCalmDown("Hellooooo")


module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
