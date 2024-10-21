const calculate = () => {
  const value = document.querySelector('#numbers').value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el));
  const filtered = numbers.filter(el => !isNaN(el));
};












//testing arr method
const testArr = [1,2,3,4,5];
console.log(testArr.map(el => el+=1));
console.log(testArr.filter(el => el>2));