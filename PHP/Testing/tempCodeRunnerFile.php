<?php
$percent;
$string1 = "Hello World";
$string2 = "Hello Universe";
$similarity = similar_text($string1, $string2, $percent);
echo $percent; // Output: 57.14 (the percentage of similarity)