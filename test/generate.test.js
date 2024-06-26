const { generateName, generateGenre } = require('../src/index.js');
const { faker } = require('@faker-js/faker');

jest.mock('@faker-js/faker', () => {
  return {
    faker: {
      person: {
        fullName: jest.fn(),
      },
      music: {
        genre: jest.fn(),
      },
    },
  };
});

describe('generateName', () => {
  it('should return a name', () => {
    const mockName = 'John Doe';
    faker.person.fullName.mockReturnValue(mockName);

    const name = generateName();

    expect(name).toBe(mockName);
    expect(faker.person.fullName).toHaveBeenCalled();
  });
});

describe('generateGenre', () => {
  it('should return a genre', () => {
    const mockGenre = 'Rock';
    faker.music.genre.mockReturnValue(mockGenre);
    const genre = generateGenre();
    expect(genre).toBe(mockGenre);
    expect(faker.music.genre).toHaveBeenCalled();
  });
});
