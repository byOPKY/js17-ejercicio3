window.alert("Aprendiendo si es Par");
var num1 =parseInt(prompt ("Ingresa el numero"));

if (num1%2==0 && num1<5) {
	document.write("Good");
} 
else if (num1%2==0 && 6<=num1 && num1<=20) {
	document.write("Great");

}else if (num1%2==0 && num1>20) {
	document.write("Perfect");
} else {
	document.write("Odd!!");
}







