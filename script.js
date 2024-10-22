const calculate = () => {
  const value = document.querySelector('#numbers').value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

  const regex = /^[0-9]+$/;
  if (array.some(el => !regex.test(el))) { // Check if any element doesn't match the regex
    alert('Please insert valid numbers only.');
    return;
  }

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
};

// before using implicit return
// function getMean(array) {
//   // const sum = array.reduce((acc, el) => acc + el, 0); //initial value of 0
//   // const mean = sum/array.length;
//   // return mean;
  
// }
//using implicit return:
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const isEven = sorted.length%2 == 0;
  if(isEven) {
    const firstMiddleNumber = sorted[sorted.length/2];
    const secondMiddleNumber = sorted[(sorted.length/2)-1];
    return getMean([firstMiddleNumber, secondMiddleNumber]);
  } else
  return sorted[Math.floor(sorted.length/2)];
}


const getMode = (array) => {
  const counts = {};
  // array.forEach(el => {
  //   if(counts[el]) {
  //     counts[el]++;
  //   } else {
  //     counts[el] = 1;
  //   }
  // })
  array.forEach(el => counts[el] = (counts[el] || 0) + 1);

  if(new Set(Object.values(counts)).size===1){
    return null;
  } //In the condition, create a Set with new Set() and pass it the Object.values() of your counts object. If the size property of this Set is equal to 1, that tells you every value appears the same number of times. In this case, return null from your function.

  console.log(Object.keys(counts));
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];

  const mode = Object.keys(counts).filter((el) => counts[el]===counts[highest]);

  return mode.join(', '); //mode is an array, so return it as a string with the .join() method. Separate the elements with a comma followed by a space.
}


//function to get the range between max and min inside the arr
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}

//function to calculate the variance
const getVariance = (array) => {
  const mean = getMean(array);
  // const differences = array.map(el => el-mean); //save the differences for each value inside the array compared to the mean
  // const squaredDifferences = differences.map(el => el**2);
  // const sumSquaredDifferences = squaredDifferences.reduce((acc, el) => acc+el, 0);

  //With two .map() calls and a .reduce() call, you're creating extra arrays and iterating more times than needed. You should move all of the logic into the .reduce() call to save time and memory. Remove the differences, squaredDifferences, and sumSquaredDifferences variables (and their values). Declare a variance variable, and assign it the value of array.reduce(). For the callback, pass in your standard acc and el parameters, but leave the function body empty for now. Don't forget to set the initial value to 0. =>

    const variance = array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    }, 0)/array.length; //The final step in calculating the variance is to divide the sum of the squared differences by the count of numbers.
    return variance;
}

//function to calc standard deviation
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  // const standardDeviation = Math.pow(variance, 0.5);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}












// ------------------testing----------------------

//testing arr method
const testArr = [1,2,3,4,5];
console.log(testArr.map(el => el+=1));
console.log(testArr.filter(el => el>2));

// testing median
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const firstMiddleNumber = testArr2[testArr2.length/2];
const secondMiddleNumber = testArr2[(testArr2.length/2)-1];

const evenListMedian = getMean([firstMiddleNumber, secondMiddleNumber]);
console.log(evenListMedian);

//testing Set
const set1 = new Set([1, 2, 2, 3, 4, 5]);
console.log(set1)

const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
console.log(a.union(b));
