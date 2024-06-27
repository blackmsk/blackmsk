var CalssA = /** @class */ (function () {
    function CalssA() {
    }
    CalssA.getFullName = function () {
        return "ClassA " + CalssA.typeName;
    };
    return CalssA;
}());
var a = new CalssA();
// console.log(a.typeName);
console.log(CalssA.typeName);
console.log(CalssA.getFullName());
