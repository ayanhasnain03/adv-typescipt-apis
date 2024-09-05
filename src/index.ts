interface User {
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const result = sumOfAge({ name: "foo", age: 10 }, { name: "bar", age: 20 });

console.log(result);
