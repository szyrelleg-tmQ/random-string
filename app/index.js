const names = ['John', 'Doe', 'Smith'];

function generateName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const firstName = names[randomIndex];
  return firstName;
}