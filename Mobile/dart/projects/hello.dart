import 'dart:io';


/*
* Task: Grade Calculator

Ask the user to enter their name.

Ask how many subjects they have.

For each subject, ask for the grade (0–20 for example).

Calculate the average.

Print:

If average < 10 → "Sorry [name], you failed 😢".

If average between 10–15 → "Good job [name], you passed 🙂".

If average > 15 → "Excellent [name], you are outstanding 🎉".
*/


void main() {

	void gradeCalculator() {
		print("Hello, please enter your name : ");
		var userName = stdin.readLineSync();
		print("Hello, how many subjects do you have: ");
		var subjectsNum = int.parse(stdin.readLineSync()!) ;
		if (subjectsNum == 0 ){
			print("false entry");
			return ;
		}
		var subjectsList = [];
		var subjectsMarks = [];
	    for(var i = 1 ; i <= subjectsNum ; i++){
        	print("Enter Subject Name N$i :");
        	var subjectName = stdin.readLineSync();
        	subjectsList.add(subjectName);
        	print("Enter ${subjectsList[i-1]} Mark :");
        	var subjectMark = int.parse(stdin.readLineSync()!);
        	if (subjectMark > 20){
        		print('false entry');
        		return;
        	}
        	subjectsMarks.add(subjectMark);
	  }

	  	 // Print table header
	  	 print("\n============ Bulletin : $userName ============");
	  	 print("| ${'Subject'.padRight(15)} | ${'Mark'.padRight(5)} |");
  		 print("-------------------------------------------");
  		 for(var i = 1 ; i <= subjectsNum ; i++){
  		 	 print("| ${subjectsList[i-1].padRight(15)} | ${subjectsMarks[i-1].toString().padRight(5)} |");
  		 }
  		 print("========================================");
  		 var total = subjectsMarks.reduce((a,b)=> a+b );
  		 var average = total / subjectsNum ;
  		 print("| ${'Average'.padRight(15)} | ${average.toStringAsFixed(2).padRight(5)} |");
  		 print("========================================");
  		 if (average < 10) {
  		 print("Result: Failed 😢");
		 } else if (average <= 15) {
  		print("Result: Good 🙂");
		} else {
  		print("Result: Excellent 🎉");
		}



	}

	///testing 
	gradeCalculator();

	// for exe 
	print('\nPress "y" to re-launch or any other key to exit');
	var answer = stdin.readLineSync();
	if (answer == 'y'){
		gradeCalculator();
	}
}
  


  
  





  