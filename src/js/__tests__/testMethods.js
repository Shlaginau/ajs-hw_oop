import Character from '../Character';

describe('Character levelUp method', () => {
  test('should throw an error if health is 0', () => {
    const character = new Character('Test', 'Swordsman');
    character.health = 0;
    expect(() => character.levelUp()).toThrowError('Нельзя повысить уровень умершего персонажа');
  });

  test('should increase level by 1', () => {
    const character = new Character('Test', 'Swordsman');
    character.levelUp();
    expect(character.level).toBe(2);
  });

  test('should increase attack and defence by 20%', () => {
    const character = new Character('Test', 'Swordsman');
    character.attack = 40;
    character.defence = 10;
    character.levelUp();
    expect(character.attack).toBe(48);
    expect(character.defence).toBe(12);
  });

  test('should set health to 100', () => {
    const character = new Character('Test', 'Swordsman');
    character.damage(50);
    character.levelUp();
    expect(character.health).toBe(100);
  });
});

describe('Character damage method', () => {
  test('should reduce health based on damage points and defence', () => {
    const character = new Character('Test', 'Swordsman');
    character.defence = 20;
    character.damage(30);
    expect(character.health).toBe(76);
  });

  test('should not reduce health below 0', () => {
    const character = new Character('Test', 'Swordsman');
    character.health = 20;
    character.defence = 10;
    character.damage(100);
    expect(character.health).toBe(0);
  });

  test('should throw an error if points is not a number', () => {
    const character = new Character('Test', 'Swordsman');
    expect(() => character.damage('30')).toThrowError('Значение points не является числом');
  });

  test('should throw an error if health is 0', () => {
    const character = new Character('Test', 'Swordsman');
    character.health = 0;
    expect(() => character.damage(40)).toThrowError('Нельзя нанести урон умершему персонажу');
  });
});
