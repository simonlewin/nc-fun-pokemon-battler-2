const { Pokemon } = require("../src/pokemon");

describe("Pokemon", () => {
  test("Pokemon class returns name, hitPoints, attackDamage and move properties", () => {
    // act
    const received = new Pokemon("Charmander", 44, 17, "Flamethrower");
    // assert
    const expected = {
      name: "Charmander",
      hitPoints: 44,
      attackDamage: 17,
      move: "Flamethrower",
    };
    expect(received).toMatchObject(expected);
  });
  test("Pokemon class returns default move property of 'tackle'", () => {
    // act
    const received = new Pokemon();
    // assert
    const expected = {
      move: "tackle",
    };
    expect(received).toMatchObject(expected);
  });
});

describe("takeDamage()", () => {
  test("takeDamage method is defined", () => {
    // act
    const received = new Pokemon();
    // assert
    expect(typeof received.takeDamage).toBe("function");
  });
  test("takeDamage reduces health by the given argument", () => {
    // arrange
    const received = new Pokemon("Charmander", 44);
    // act
    received.takeDamage(4);
    // assert
    const expected = {
      hitPoints: 40,
    };
    expect(received).toMatchObject(expected);
    expect(received).toHaveProperty("hitPoints", 40);
    expect(received.hitPoints).toBe(40);
  });
});

describe("useMove()", () => {
  test("useMove method is defined", () => {
    // act
    const received = new Pokemon();
    // assert
    expect(typeof received.useMove).toBe("function");
  });
  test("useMove returns attackDamage", () => {
    // arrange
    const pokemon = new Pokemon("Charmander", 44, 17);
    // act
    const received = pokemon.useMove();
    // assert
    const expected = 17;
    expect(received).toBe(expected);
  });
  test("useMove console logs 'Charmander used Flamethrower'", () => {
    // arrange
    const consoleLogSpy = jest.spyOn(console, "log");
    const pokemon = new Pokemon("Charmander", 44, 17, "Flamethrower");
    // act
    pokemon.useMove();
    // assert
    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith("Charmander used Flamethrower");
  });
});

describe("hasFainted()", () => {
  test("hasFainted method is defined", () => {
    // act
    const received = new Pokemon();
    // assert
    expect(typeof received.hasFainted).toBe("function");
  });
  test("hasFainted returns true if attackDamage is reduced to zero", () => {
    // arrange
    const pokemon = new Pokemon("Charmander", 44);
    pokemon.takeDamage(44);
    // act
    const received = pokemon.hasFainted();
    // assert
    expect(received).toBe(true);
    expect(received).toBeTruthy();
  });
  test("hasFainted returns false if attackDamage is above zero", () => {
    // arrange
    const pokemon = new Pokemon("Charmander", 44);
    pokemon.takeDamage(40);
    // act
    const received = pokemon.hasFainted();
    // assert
    expect(received).toBe(false);
  });
});
