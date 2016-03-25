
// model
export class Meal {
  public tapped: boolean = false;
  constructor(public MealId: number = 0,
              public name: string,
              public description: string,
              public calories: number) {
  }
}
