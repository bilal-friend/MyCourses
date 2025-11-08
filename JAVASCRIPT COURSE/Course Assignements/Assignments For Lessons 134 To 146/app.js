let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /(\d+|\D+)+/gi;

console.log(ip.match(ipRe));
// ['2001:db8:3333:4444:5555:6666:7777:8888']

console.log("********* \n".repeat(2));
// ************************************************************************************

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /\b(Os)\d*(O)\b/gi;
console.log(specialNames.match(specialNamesRe));
// (3) ['Os10O', 'OsO', 'Os100O']

console.log("********* \n".repeat(2));
// ******************************************************************

let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3} \(\d{4}\)/gi;
console.log(phone.match(phoneRe));
// ['+(995)-123 (4567)']

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/*



*/

console.log("********* \n".repeat(2));
// ******************************************************************

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

re = /\d{2}(\/|\s-\s|\s)\d{2}(\/|\s-\s|\s)(\d)*(\d{2})/gi; // Write Pattern Here
console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
