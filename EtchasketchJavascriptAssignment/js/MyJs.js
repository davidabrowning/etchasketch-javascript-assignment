function testJs() {
    let htmlResults = document.getElementsByClassName("section-title");
    htmlResults[0].classList.add("blue");
}

function createAndGreet() {
    john = new Person("John");
    john.greet("Jane");
}

class Person {
    constructor(name) {
        this.name = name;
    }
    greet(otherName) {
        const paragraphs = document.getElementsByTagName("p");
        const greeting = document.createTextNode("Hello, " + otherName + " -" + this.name);
        paragraphs[0].appendChild(greeting);
    }
}