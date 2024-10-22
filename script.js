const calculate = () => {
  const value = document.querySelector('#numbers').value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
};

// before using implicit return
// function getMean(array) {
//   // const sum = array.reduce((acc, el) => acc + el, 0); //initial value of 0
//   // const mean = sum/array.length;
//   // return mean;
  
// }
//using implicit return:
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

function getMedian(array) {
  const sorted = array.toSorted((a, b) => a - b);
  const isEven = sorted.length%2 == 0;
  if(isEven) {
    const firstMiddleNumber = sorted[sorted.length/2];
    const secondMiddleNumber = sorted[(sorted.length/2)-1];
    return getMean([firstMiddleNumber, secondMiddleNumber]);
  } else
  return sorted[Math.floor(sorted.length/2)];
}

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