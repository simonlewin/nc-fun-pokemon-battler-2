class Pokeball {
  #stores;

  constructor() {
    this.#stores = {};
  }

  throw(pokemon) {
    if (!Object.keys(this.#stores).length) {
      this.#stores = pokemon;
      console.log(`You caught ${pokemon.name}`);
    }
  }

  get contains() {
    return Object.keys(this.#stores).length ? this.#stores.name : "empty...";
  }
}

module.exports = { Pokeball };
