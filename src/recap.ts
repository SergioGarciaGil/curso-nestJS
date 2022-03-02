const mayName = 'sergio';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

class Persona {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }
  getSumary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}
const sergio = new Persona(15, 'sergio');
sergio.getSumary();
