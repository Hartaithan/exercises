/**
 * @param {String[]} arr
 * @returns {String[]}
 */
const sortASC = (arr) => {
  return arr.sort((a, b) => {
    const aLetter = a.slice(0, 1).toLocaleLowerCase();
    const aNumber = Number(a.slice(1, a.length));
    const bLetter = b.slice(0, 1).toLocaleLowerCase();
    const bNumber = Number(b.slice(1, b.length));
    if (aLetter > bLetter) return 1;
    if (aLetter < bLetter) return -1;
    if (aNumber > bNumber) return 1;
    if (aNumber < bNumber) return -1;
  });
};

console.log(sortASC(["A100", "A3", "Z100", "Z2"]));
// [ 'A3', 'A100', 'Z2', 'Z100' ]
