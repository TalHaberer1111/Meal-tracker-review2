import { Component } from 'angular2/core';
import { Meal } from './meal.model';


  @Component({
      selector: 'meal-display',
      inputs: ['meal'],
      template: `
      <div class="mealInfo">
        <label (click)="isSelected = !isSelected" [class.selected]="isSelected">{{ meal.name }}</label>
      </div>
      `
  })
  export class MealComponent {
    public meal: Meal;
    public isSelected = false;
    toggleHealthy(setState: boolean){
      this.meal.healthy = setState;
    }
  }
