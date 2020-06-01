let resultado = document.querySelector("#resultNumber");
resultado.target = true;
window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = parseInt(document.getElementById("firstNumber").value);
	//Return the value of the input #secondNumber
	var stringB = parseInt(document.getElementById("secondNumber").value);

	//your code goes here

	resultado.value = stringA + stringB;
};
