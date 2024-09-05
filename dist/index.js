"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAge({ name: "foo", age: 10 }, { name: "bar", age: 20 });
console.log(result);
