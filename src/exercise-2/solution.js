/**
 * @param {String} path
 * @returns {Object}
 */

const createNamespace = (path) => {
  let object = {};
  let prev = object;
  const splitted = path.split(".");
  for (let i = 0; i < splitted.length; i++) {
    const element = splitted[i];
    prev[element] = {};
    prev = prev[element];
  }
  return object;
};

console.log(createNamespace("a.b.c.d.e"));
// {a:{b:{c:{d:{e:{}}}}}}
