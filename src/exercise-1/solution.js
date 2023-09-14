const sum = (x, y) => x + y;
const minus = (x, y) => x - y;
const double = (x) => sum(x, x);
const addOne = (x) => sum(x, 1);
const divide = (x) => x / 2;
const square = (x) => x * x;

const chain = (fns) => {
  let acc = 0;

  const array = Object.entries(fns);
  for (let i = 0; i < array.length; i++) {
    const [key, fn] = array[i];
    fns[key] = (...args) => {
      acc = acc === 0 ? fn(...args) : fn(acc, ...args);
      return fns;
    };
  }

  fns.execute = () => {
    const result = acc;
    acc = 0;
    return result;
  };

  return fns;
};

const c = chain({ sum, minus, double, addOne, divide, square });

console.log(
  c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute()
); // 72
console.log(c.sum(4, 5).sum(5).execute()); // 14
console.log(c.sum(6, 4).divide().addOne().divide().execute()); // 3
console.log(c.sum(1, 1).sum(3).square().execute()); // 25
