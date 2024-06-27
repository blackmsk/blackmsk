class CalssA{
  static typeName: string;

  constructor(){}

  static getFullName(){
    return "ClassA "+ CalssA.typeName;
  }
}

const a = new CalssA();
// console.log(a.typeName);
console.log(CalssA.typeName);
console.log(CalssA.getFullName());


