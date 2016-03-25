import { Component } from 'angular2/core';
import { Meal } from './meal.model';


  @Component({
      selector: 'meal-display',
      inputs: ['meal'],
      template: `
      <div class="mealInfo">
        <input *ngIf="meal.tapped" type="checkbox" checked (click)="toggleTapped(false)"/>
        <input *ngIf="!meal.tapped" type="checkbox" (click)="toggleTapped(true)"/>
        <label>{{ meal.name }}</label>
        <label> Meal Description: {{ meal.description }}</label>
        <label> Calories: {{ meal.calories }}</label>
      </div>
      `
  })
  export class MealComponent {
    public meal: Meal;
    toggleTapped(setState: boolean){
      this.meal.tapped = setState;
    }
  }
