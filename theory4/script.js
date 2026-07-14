// alert("Hello from JS");
var a = 1.2;
var b = 5;
var str = "Hello world";
var c;
// console.log(typeof(c));
// console.log(a);

var s;
// undefined when declared but value not assigned
console.log(typeof(s));
console.log(s);
s = null; // null only when manually assigned

console.log(isNaN(1.5));
// isNumber(1.5) -> true
console.log(isNaN("012412441"));

s = "hello world";
s = 'hello world';
s = 'My name is "Sazid"';
s = "My name is 'Sazid'";
s = "The restaurant's name is \"Pizzaburg\"";
// escape character
console.log(s.length);
console.log(s)
s = s.replace("Pizzaburg", "Khanas");
console.log(s);
