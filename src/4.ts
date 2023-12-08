class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  constructor(protected key: Key) {}
  door: boolean = false;
  tenants: Person[] = [];
  abstract openDoor(key: Key): void;
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("we are comeIn");
    } else {
      console.log("Your key is not valid");
    }
  }
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

//Варіант коли ключ не пасує!!!!
// const key = new Key();
// const house = new MyHouse(new Key());
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

export {};
