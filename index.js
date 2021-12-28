let myArray = [
  { name: 'john', id: 1, fruit: 'apple' },
  { name: 'tim', id: 2, fruit: 'berry' },
  { name: 'fred', id: 3, fruit: 'banana' },
];

const newArray = myArray.map((person) => {
  const { name, ...rest } = person;
  return rest;
});

console.log(newArray);
