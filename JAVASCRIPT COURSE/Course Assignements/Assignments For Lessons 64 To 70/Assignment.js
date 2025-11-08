function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    zName = zName.split(" ");
    return `${zName[0]} ${zName[1][0]}.`;
  }
  function ageWithMessage() {
    return `Your Age is ${parseInt(zAge)}`;
  }
  function countryTwoLetters() {
    return `You Live in ${zCountry.substr(0, 2).toUpperCase()}`;
  }
  return `Hello ${namePattern()} , ${ageWithMessage()}, ${countryTwoLetters()}.`;
}

console.log(getDetails("Bilal Elemrani", "17 Is My Age", "Morroco"));
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log("################# \n".repeat(2));

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("################# \n".repeat(2));

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

let arrowCheker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}$`
    : `I am Not Available`;

console.log(arrowCheker("Bilal")("Available")("3000"));

console.log("################# \n".repeat(2));

function specialMix(...data) {
  let result, y;
  result = y = 0;

  for (let i = 0; i < data.length; i++) {
    result += isNaN(parseInt(data[i])) === true ? 0 : parseInt(data[i]);
    y += isNaN(parseInt(data[i])) === true ? 1 : 0;
  }
  return y === data.length ? `All Is Strings` : result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("obama", 15));
console.log(specialMix("0Bilal", "Ossama"));
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
