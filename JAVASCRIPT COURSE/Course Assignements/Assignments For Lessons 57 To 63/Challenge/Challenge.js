function userInfo(a = "Unkonw", b = "Unkonw", c = "Unkown") {
  let name;
  let age;
  let status;

  typeof a === "string"
    ? (name = a)
    : typeof b === "string"
    ? (name = b)
    : (name = c);

  typeof a === "number"
    ? (age = a)
    : typeof b === "number"
    ? (age = b)
    : (age = c);

  typeof a === "boolean"
    ? (status = a)
    : typeof b === "boolean"
    ? (status = b)
    : (status = c);

  return `Hello ${name}, Your Age Is ${age}, You Are ${(status =
    status === true ? "Available" : "Not Available")} For Hire`;
}

console.log(userInfo(15, true, "bilal"));
