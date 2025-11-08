let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

showDettails();

function showDettails(
  { title: t, age: a, available: av, skills } = myFriends[chosen - 1]
) {
  console.log(t);
  console.log(a);
  console.log(av === true ? "Availaible" : "Not Available");
  console.log(skills[skills.length - 1]);
}
