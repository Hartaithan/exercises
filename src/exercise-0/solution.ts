interface Badge {
  [key: string | symbol]: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

const createBadge = (firstName: string, lastName: string): Badge => {
  const handler: ProxyHandler<Badge> = {
    get: (target, name) => {
      if (name === "fullName") {
        return `${target.firstName} ${target.lastName}`;
      }
      return target[name];
    },
    set: (obj, prop, value: string) => {
      switch (prop) {
        case "firstName":
          obj.firstName = value;
          return true;
        case "lastName":
          obj.lastName = value;
          return true;
        case "fullName":
          if (!value.includes(" ")) {
            throw new Error("Error: invalid fullName format");
          }
          const [firstName, lastName] = value.split(" ");
          obj.firstName = firstName;
          obj.lastName = lastName;
          obj.fullName = value;
          return true;
        default:
          throw new Error("Error: unknown");
      }
    },
  };
  return new Proxy(
    {
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
    },
    handler
  );
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
