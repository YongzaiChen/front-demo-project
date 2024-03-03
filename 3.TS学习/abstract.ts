(function () {
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        abstract say(): void
    }

    class Cat extends Animal {
        say(): void {
            console.log(`${this.name}喵`);
        }
    }

    const cat = new Cat("饭团");
    cat.say();
})()