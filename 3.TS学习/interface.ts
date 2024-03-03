(function () {
    interface MyClass {
        name: string;

        say(): void
    }

    interface MyClass {
        age: number
    }

    class Cat implements MyClass{
        age: number;
        name: string;

        say(): void {
        }
    }
})()