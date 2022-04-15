let person;
//esling-disable-next-line prefer-const
person = 'Rory';

const buildPerson = (person: string) => {
  return `your person is ${person}`;
};

console.log(buildPerson(person));