function oldEnough(age: number): never | boolean {
  if(age>59){
    throw Error("Todd old!")
  }
  if(age <= 18){
    return false;
  }
  return true;
}
