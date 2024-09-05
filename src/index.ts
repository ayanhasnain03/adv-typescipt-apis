//read only

type User = {
  readonly name: string;
  readonly age: number;
  readonly password: string;
};

const user: User = {
  name: "foo",
  age: 10,
  password: "12345",
};

user.name = "bar";
console.log(user);
