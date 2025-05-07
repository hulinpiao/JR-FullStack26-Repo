//part 2:Basic Type Annotations
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 10);
console.log(`The result of adding 5 and 10 is: ${result}`);

//part 3: Working with Interfaces
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): void {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const user: Person = {
    name: "John",
    age: 30
};
greet(user);