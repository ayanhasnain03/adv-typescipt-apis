"use strict";
//read only
const arrayOfUsers = [
    {
        name: "foo",
        age: 10,
        password: "12345",
    },
    {
        name: "bar",
        age: 20,
        password: "12345",
    },
];
arrayOfUsers.forEach((user) => {
    console.log(user.name);
    console.log(user.age);
    console.log(user.password);
});
