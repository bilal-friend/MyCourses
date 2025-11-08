<?php
/* file : 
hello my is bilal 

this text is just for testing.
Hello World!
Hello World!
*/ 


print_r(file("test.txt"));
/* output :
Array
(
    [0] => hello my is bilal

    [1] =>

    [2] => this text is just for testing.

    [3] => Hello World!

    [4] => Hello World!
) */


$handle = fopen("test.txt", "r");

$line = 1; 

while (! feof($handle) ) {
 echo "line $line : " . fgets($handle) . "\n";
 $line++;
}
/*line 1 : hello my name is bilal

line 2 :

line 3 : this text is just for testing.  

line 4 : Hello World!

line 5 : Hello World!
*/
echo "\n ############ \n";

for ($line = 1; $line <= count(file("test.txt")); $line++) {
 echo "line $line : " . fgets($handle) . "\n";
}
/*
line 1 :
line 2 :
line 3 :
line 4 :
line 5 :
*/
// the pointer has already reached the end of the file, so nothing will be returned.
fclose($handle); 