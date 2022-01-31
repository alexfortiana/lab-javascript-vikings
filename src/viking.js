// Soldier
class Soldier {
  constructor(healthParam, strengthParam) {
    this.health = healthParam;
    this.strength = strengthParam;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(nameParam, healthParam, strengthParam) {
    super(healthParam, strengthParam);
    this.name = nameParam;
  }
  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  };

  battleCry = () => {
    return 'Odin Owns You All!';
  };
}

// Saxon
class Saxon extends Soldier {
  constructor(healthParam, strengthParam) {
    super(healthParam, strengthParam);
  }
  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health <= 0) {
      return 'A Saxon has died in combat';
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking = (vikingObj) => {
    this.vikingArmy.push(vikingObj);
  };
  addSaxon = (saxonObj) => {
    this.saxonArmy.push(saxonObj);
  };
  vikingAttack = () => {
    let vikIndex = Math.random() * this.vikingArmy.length;
    let randomIndex = Math.floor(vikIndex);
    let randomViking = this.vikingArmy(randomIndex);

    let saxIndex = Math.random() * this.saxonArmy.length;
    let randomIndexSax = Math.floor(saxonObj);
    let randomSaxon = this.saxonArmy(randomIndexSax);

    return randomSaxon.receiveDamage(randomViking.attack);
  };
  saxonAttack = () => {
    let saxIndex = Math.random() * this.saxonArmy.length;
    let randomIndexSax = Math.floor(saxonObj);
    let randomSaxon = this.saxonArmy(randomIndexSax);

    let vikIndex = Math.random() * this.vikingArmy.length;
    let randomIndex = Math.floor(vikIndex);
    let randomViking = this.vikingArmy(randomIndex);

    return randomViking.receiveDamage(randomSaxon.attack);
  };
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
