function Square(num){
	return num*num;
}

function Parity(num){
	if (num % 2 === 0) return "Even";
	else return "Odd";
}

function Factorial(num){
	if (num === 0) return 1;
  	else return num * Factorial(num - 1);
}

function Rand(){
	return Math.trunc(Math.random()*10);
}

function Max(a,b,c,d){
	return Math.max(Math.max(a,b), Math.max(c,d));
}

function callRandMax(){
	return Max(Rand(),Rand(), Rand(), Rand());
}



function show() {
	var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "des"];
	for (var i=0; i < months.length; i++){
		console.log(months[i]);
	}
}