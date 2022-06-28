export enum PizzaSize {
  SMALL = 4,
  MEDIUM = 6,
  BIG = 8,
  BIGGER = 12
}

export enum PizzaFlavors {
  CHICKEN = 'chicken',
  PEPPERONI = 'pepperoni'
}

export enum PizzaSideDishes {
  CHEESE = 'cheese',
  CREAM_CHEESE = 'cream_cheese',
  CORN = 'corn',
  BACON = 'bacon'
}

export class Pizza {
  constructor(readonly size: PizzaSize, readonly flavors: PizzaFlavors[], readonly sideDishes: PizzaSideDishes[]) {}
}

export class PizzaBuilder {

  private _flavors: PizzaFlavors[];
  private _sideDishes: PizzaSideDishes[];

  constructor(readonly _size: PizzaSize) {
    this._flavors = [];
    this._sideDishes = [];
  }

  addFlavor(flavor: PizzaFlavors): PizzaBuilder {
    this._flavors.push(flavor);
    return this;
  }

  addSideDishes(sideDishes: PizzaSideDishes): PizzaBuilder {
    this._sideDishes.push(sideDishes);
    return this;
  }

  build(): Pizza {
    if (!this._flavors.length) {
      throw new Error('flavors is missing');
    }
    if (!this._sideDishes.length) {
      throw new Error('side dishes is missing');
    }
    return new Pizza(this._size, this._flavors, this._sideDishes);
  }
  
  buildChicken(): Pizza {
    this.addFlavor(PizzaFlavors.CHICKEN);
    this.addSideDishes(PizzaSideDishes.CHEESE);
    this.addSideDishes(PizzaSideDishes.CREAM_CHEESE);
    return this.build();
  }

  buildPepperoni(): Pizza {
    this.addFlavor(PizzaFlavors.PEPPERONI);
    this.addSideDishes(PizzaSideDishes.CHEESE);
    return this.build();
  }
}
