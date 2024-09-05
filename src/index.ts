interface User {
  name: string;
  age: number;
  password: string;
}

type UpdateProps = Pick<User, "age" | "name" | "password">; //pick from user

function updateUser(updatedProps: UpdateProps) {
  console.log(updatedProps);
}
