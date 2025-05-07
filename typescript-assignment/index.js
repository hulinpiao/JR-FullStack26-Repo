//part 2:Basic Type Annotations
function add(a, b) {
    return a + b;
}
var result = add(5, 10);
console.log("The result of adding 5 and 10 is: ".concat(result));
function greet(person) {
    console.log("Hello, ".concat(person.name, "! You are ").concat(person.age, " years old."));
}
var user = {
    name: "John",
    age: 30
};
greet(user);
