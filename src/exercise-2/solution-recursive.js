/**
 * @param {String} path
 * @returns {Object}
 */

const createNamespace = (path, object = {}) => {
  const splitted = path.split(".");
  const element = splitted.shift();

  if (element) {
    const result = createNamespace(splitted.join("."), {});
    object[element] = result;
  }

  return object;
};

console.log(createNamespace("a.b.c.d.e"));
// {a:{b:{c:{d:{e:{}}}}}}
