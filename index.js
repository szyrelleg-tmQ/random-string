const { faker } = require('@faker-js/faker');

function generateName() {
  const firstName = faker.person.fullName();
  return firstName;
}

function generateGenre(){
  const genre = faker.music.genre();
  return genre;
}
