var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
        console.log("생성자");
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person("hello");
tom.speak();
