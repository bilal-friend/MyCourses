myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,s,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter((el) => isNaN(el))
  .map((el) => (el === "_" ? " " : el))
  .reduce((acc, el) => `${acc}${el}`)
  .slice(+true, -true);

console.log(solution);
