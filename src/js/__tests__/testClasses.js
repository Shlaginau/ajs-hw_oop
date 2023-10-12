import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test.each([
  [new Bowman('name'), 'Bowman'],
  [new Daemon('name'), 'Daemon'],
  [new Magician('name'), 'Magician'],
  [new Swordsman('name'), 'Swordsman'],
  [new Undead('name'), 'Undead'],
  [new Zombie('name'), 'Zombie'],
])('inherits parent properties', (character, expectedType) => {
  expect(character.name).toBe('name');
  expect(character.type).toBe(expectedType);
});

test('name length should be greater than 2', () => {
  expect(() => new Character('n', 'Undead')).toThrowError('Имя должно быть не менее 2 и не более 10 символов');
});

test('name length should be less than 10', () => {
  expect(() => new Character('namenamename', 'Zombie')).toThrowError('Имя должно быть не менее 2 и не более 10 символов');
});

test('error on incorrect type', () => {
  expect(() => new Character('name', 'Alive')).toThrowError('Такого персонажа не существует');
});
