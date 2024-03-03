class Person {
    name: string;
    age: number;
    static job: string = "it";
    readonly money: number = 10000000;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log("说话")
    }

    static doJob() {
        return "工作";
    }
}

const person = new Person('zs',18);
const person2 = new Person('ls',20);
const person3 = new Person('ww',22);
person.name = "chenyongzai";
person.age = 18

console.log(person)
person.say();
console.log(Person.job)
console.log(Person.doJob())
console.log(person.money)
person.name = '1'
console.log(person)
console.log(person2)