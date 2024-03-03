(function () {
    class Animal {
        name: string;
        age: number;

        constructor(name: string) {
            this.name = name;
        }

        say() {
            console.log(`${this.name}叫`)
        }
    }

    class Dog extends Animal {
        constructor(name: string) {
            super(name);
        }
    }

    class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }
    }

    const dog = new Dog("nono");
    const cat = new Cat("饭团");

    dog.age = 1;
    console.log(dog);
    console.log(cat)
    dog.say();
    cat.say();
})()