const sumBigInt = (a, b) => {
  const delimiter = a.length - b.length - 2;
  let num = a.slice(delimiter);
  console.log("num", num);
  let sum = +num + +b;

  return a.slice(0, delimiter) + sum.toString();
};

console.log(sumBigInt("90071992547409918889", "1489"));
// 90071992547409918889 + 1489 = 90071992547409920378
console.log(sumBigInt("90071992547409918889", "1"));
// 90071992547409918889 + 1 = 90071992547409918890
console.log(sumBigInt("90071992547409918889", "20"));
// 90071992547409918889 + 20 = 90071992547409918909
console.log(sumBigInt("90071992547409918349", "4664"));
// 90071992547409918349 + 4664 = 90071992547409918909
