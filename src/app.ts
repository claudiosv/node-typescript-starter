function greeter(person: string) {
  return `Hello ${person}!`;
}

function main() {
  const userName: string = "Node Hero";

  console.log(greeter(userName));
  for (let i: number = 0; i < 100000; i++) {
    console.log("Test ", i);
  }
}

export default greeter;
/*
Typescript
Yarn
eslint
Babel ?
chrome devtools
Docker
Circle ci
*/
