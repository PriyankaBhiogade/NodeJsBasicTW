let read = require('readline-sync');
let number = read.question("Enter Number : ");

if(number == 0 && number == 1) {
	console.log("Invalid Number!");
} else {
	for(let i=2; i*i <= number; i++) {
		while(number % i == 0) {
			console.log("Factors are : ",i);
			number = number / i;
		}
	}
}

console.log("Factors are : ",number);

