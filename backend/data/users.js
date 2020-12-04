import bcrypt from "bcryptjs";
const users = [
  {
    name: "User Admin",
    email: "this@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "Jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "John@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
