interface Badge {
  firstName: string;
  lastName: string;
  fullName: string;
}

const createBadge = (_firstName: string, _lastName: string): Badge => {
  let firstName = _firstName;
  let lastName = _lastName;
  let fullName = `${_firstName} ${_lastName}`;
  return {
    get firstName() {
      return firstName;
    },
    get lastName() {
      return lastName;
    },
    get fullName() {
      return `${firstName} ${lastName}`;
    },
    set firstName(value: string) {
      firstName = value;
    },
    set lastName(value: string) {
      lastName = value;
    },
    set fullName(value: string) {
      if (!value.includes(" ")) {
        throw new Error("Error: invalid fullName format");
      }
      const [__firstName, __lastName] = value.split(" ");
      firstName = __firstName;
      lastName = __lastName;
      fullName = value;
    },
  };
};

const badge = createBadge("Иван", "Иванов");

console.log(badge.firstName);
// Иван
console.log(badge.lastName);
// Иванов
console.log(badge.fullName);
// Иван Иванов

badge.firstName = "Константин";

console.log(badge.firstName);
// Константин
console.log(badge.lastName);
// Иванов
console.log(badge.fullName);
// Константин Иванов

badge.lastName = "Петров";

console.log(badge.firstName);
// Константин
console.log(badge.lastName);
// Петров
console.log(badge.fullName);
// Константин Петров

badge.fullName = "Илон Маск";

console.log(badge.firstName);
// Илон
console.log(badge.lastName);
// Маск
console.log(badge.fullName);
// Илон Маск

badge.fullName = "ИлонМаск";
// Error: invalid fullName format
