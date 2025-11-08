// Chanllenge 1
console.log("%cChallnege 1", "font-size : 25px;color: red");
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

/*
[++a] [+]  [+b++] [+] [+c++]  [-]  [+a++]

 [++a] : 
      value = 11
      Explain : pre increment "add one to the value then print it  "

  [+] : 
      - explain : add operator 
  [+b++] : 
        value = 20 
        explain = unary plus and post increment 
 
 [+c++]: 
     value : 80
     explain : unary plus and post increment 

 [+a++]: 
     value : 11
     explain : post increment 
    
*/
console.log(11 + 20 + 80 - 11);

console.log("%cnext one ", "color:green; font-size:18px");
// second one

console.log(++a + -b + +c++ - -a++ + +a);

/* 
  [++a]
     value  :  13 
     explain :  pre increment 

     [-b] 
       value : -21

    [+c++]: 
        value : 81 
        explain : post increment 

    [-a++]: 
         value : -13
         explain : post increment

    [+a]:
      value : 14
      explain : unary plus 

*/
console.log(13 + -21 + 81 - -13 + 14);

console.log("%cnext one ", "color:green; font-size:18px");
// third one
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [--c]: 
       value = 81 
       explain = pre decrement 

  [+b]:
     value : 21 
     explain : unary plus 

  [--a]: 
    value : 13
    explain : pre increment 

  [+b++]: 
    value : 21
    explain : post incremnt

  [+b]: 
    value : 22 
    explain : unary plus no increment 
 
  [a]:
     value : 13
     explain : nothing here only variable 
 
  [--a]: 
     value : 12 
     explain : pre decrement 

 [+true ]: 
      value : 1 
      explain : unary plus no increment . 

*/

console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1);

console.log("%cnext one ", "color:green; font-size:18px");

// Chanllenge 2
console.log("%cChallnege 2", "font-size : 25px;color: red");

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * e); //2000

console.log(-d + ++f + ++e * ++g);
