class Person {
  constructor(private msg: string) {}
  speak() {
    console.log(this.msg);
  }
}
const tom = new Person("hello world");
// tom.msg = "hello";
tom.speak();
