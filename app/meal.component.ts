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
        <label> Total Pints Remaining: {{ meal.volume }}</label>
        <label> Price: {{ meal.price}}</label>
      </div>
      `
  })
  export class MealComponent {
    public meal: Meal;
    toggleTapped(setState: boolean){
      this.meal.tapped = setState;
    }
  }
