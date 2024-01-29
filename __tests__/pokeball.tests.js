const { Pokeball } = require("../src/pokeball");
const { Pokemon } = require("../src/pokemon");

describe("Pokeball", () => {
  test("Pokeball class returns an empty object", () => {
    // act
    const received = new Pokeball();
    // assert
    expect(typeof received).toBe("object");
    expect(received).toEqual({});
  });
});

describe("contains()", () => {
  test("contains property is defined", () => {
    // act
    const pokeball = new Pokeball();
    // assert
    expect(pokeball).toHaveProperty("contains");
  });
  test("contains method is defined as a getter", () => {
    // arrange
    const pokeball = new Pokeball();
    const spy = jest.spyOn(pokeball, "contains", "get");
    // act
    pokeball.contains;
    // assert
    expect(spy).toHaveBeenCalled();
  });
  test("contains returns 'empty...' if the Pokeball is empty", () => {
    // arrange
    const pokeball = new Pokeball();
    // act
    const received = pokeball.contains;
    // assert
    expect(received).toBe("empty...");
  });
  test("contains returns the name of the Pokemon that is stored", () => {
    // arrange
    const pokeball = new Pokeball();
    const pokemon = new Pokemon("Flareon");
    pokeball.throw(pokemon);
    // act
    const received = pokeball.contains;
    // assert
    expect(received).toBe("Flareon");
  });
});

describe("throw()", () => {
  test("throw method is defined", () => {
    // act
    const received = new Pokeball();
    // assert
    expect(typeof received.throw).toBe("function");
  });
  test("throw method takes a Pokemon as an argument", () => {
    // arrange
    const pokeball = new Pokeball();
    const spy = jest.spyOn(pokeball, "throw");
    const pokemon = new Pokemon();
    // act
    pokeball.throw(pokemon);
    // assert
    expect(spy).toHaveBeenCalledWith(pokemon);
  });
  test("throw captures the Pokemon if the Pokeball is empty", () => {
    // arrange
    const pokeball = new Pokeball();
    const pokemon = new Pokemon("Leafon");
    // act
    pokeball.throw(pokemon);
    // assert
    const received = pokeball.contains;
    expect(received).toBe("Leafon");
  });
  test("throw console logs 'You caught Flareon' when Flareon is captured", () => {
    // arrange
    const pokeball = new Pokeball();
    const pokemon = new Pokemon("Flareon");
    const consoleLogSpy = jest.spyOn(console, "log");
    // act
    pokeball.throw(pokemon);
    // assert
    expect(consoleLogSpy).toHaveBeenLastCalledWith(`You caught Flareon`);
  });
});
