let userName = 'Misha'

console.log(`Hi, ${userName}!`)


class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age
  }

  sayHi(){
    console.log(`Hi!!! I'm ${this.name}`)
  }
}
let dog = new Animal('Lyna', 3);
dog.sayHi()