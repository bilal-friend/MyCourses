let st = "Elzero Web School";

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (typeof st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
if (st.slice(-17, -11).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
if (st.substring(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}
