const typesList = [
  'Bowman',
  'Daemon',
  'Magician',
  'Swordsman',
  'Undead',
  'Zombie',
];

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Имя должно быть не менее 2 и не более 10 символов');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set type(value) {
    if (!typesList.includes(value)) {
      throw new Error('Такого персонажа не существует');
    }
    this._type = value;
  }

  get type() {
    return this._type;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (typeof points !== 'number') {
      throw new Error('Значение points не является числом');
    }

    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    } else {
      throw new Error('Нельзя нанести урон умершему персонажу');
    }
  }
}

export default Character;
