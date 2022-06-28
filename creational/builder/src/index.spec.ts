import { Pizza, PizzaBuilder, PizzaFlavors, PizzaSideDishes, PizzaSize } from "."

describe('Builder', () => {
  it('should throw an error when flavors are missing', () => {
    const customPizzaBuilder = new PizzaBuilder(PizzaSize.BIG).addSideDishes(PizzaSideDishes.BACON);
    expect(async () => customPizzaBuilder.build()).rejects.toThrowError()
  })

  it('should throw an error when side dishes are missing', () => {
    const customPizzaBuilder = new PizzaBuilder(PizzaSize.BIG).addFlavor(PizzaFlavors.CHICKEN);
    expect(async () => customPizzaBuilder.build()).rejects.toThrowError()
  })

  it('should return the small chicken pizza', () => {
    const chickenPizza = new PizzaBuilder(PizzaSize.SMALL).buildChicken();
    expect(chickenPizza).toBeInstanceOf(Pizza);
    expect(chickenPizza.size).toBe(PizzaSize.SMALL);
    expect(chickenPizza.flavors).toContain(PizzaFlavors.CHICKEN);
    expect(chickenPizza.sideDishes).toContain(PizzaSideDishes.CHEESE);
    expect(chickenPizza.sideDishes).toContain(PizzaSideDishes.CREAM_CHEESE);
  })

  it('should return the big pepperoni pizza', () => {
    const pepperoniPizza = new PizzaBuilder(PizzaSize.BIG).buildPepperoni();
    expect(pepperoniPizza).toBeInstanceOf(Pizza);
    expect(pepperoniPizza.size).toBe(PizzaSize.BIG);
    expect(pepperoniPizza.flavors).toContain(PizzaFlavors.PEPPERONI);
    expect(pepperoniPizza.sideDishes).toContain(PizzaSideDishes.CHEESE);
  })

  it('should return the custom pizza', () => {
    const customPizza = new PizzaBuilder(PizzaSize.BIGGER)
      .addFlavor(PizzaFlavors.CHICKEN)
      .addFlavor(PizzaFlavors.PEPPERONI)
      .addSideDishes(PizzaSideDishes.CHEESE)
      .addSideDishes(PizzaSideDishes.CORN)
      .addSideDishes(PizzaSideDishes.BACON)
      .build();
    expect(customPizza).toBeInstanceOf(Pizza);
    expect(customPizza.size).toBe(PizzaSize.BIGGER);
    expect(customPizza.flavors).toContain(PizzaFlavors.PEPPERONI);
    expect(customPizza.flavors).toContain(PizzaFlavors.CHICKEN);
    expect(customPizza.sideDishes).toContain(PizzaSideDishes.CHEESE);
    expect(customPizza.sideDishes).toContain(PizzaSideDishes.CORN);
    expect(customPizza.sideDishes).toContain(PizzaSideDishes.BACON);
  })
})
