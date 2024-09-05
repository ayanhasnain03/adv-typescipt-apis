const users = new Map();
users.set("ras@1", { name: "ras", age: 10, password: "12345" });
users.set("ras@2", { name: "ras", age: 10, password: "12345" });
users.set("ras@3", { name: "ras", age: 10, password: "12345" });
const user = users.get("ras@1");
console.log(user);
