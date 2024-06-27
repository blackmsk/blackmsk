class Person {
  constructor(private readonly msg: string) {
    console.log("생성자");
  }
  speak() {
    console.log(this.msg);
  }
}

const tom = new Person("hello");
tom.speak();
