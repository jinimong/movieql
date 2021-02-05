export const persons = [
  {
    id: 0,
    name: 'ggg',
    age: 19,
    gender: 'male',
  },
  {
    id: 1,
    name: 'kkk',
    age: 34,
    gender: 'male',
  },
  {
    id: 2,
    name: 'jjj',
    age: 21,
    gender: 'female',
  },
  {
    id: 3,
    name: 'kim',
    age: 17,
    gender: 'male',
  },
];

export const getPersonById = (id) => persons.find((person) => id === person.id);
