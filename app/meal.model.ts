
// model
export class Meal {
  public healthy: boolean = false;
  constructor(public MealId: number = 0,
              public name: string,
              public description: string,
              public calories: number) {
  }
}
