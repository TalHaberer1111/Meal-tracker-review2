import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'display-meal-details',
  inputs: ['meal'],
  template: `
  <div class="display-meal-details">
    <p>Details: {{meal.description}}</p>
    <p>Calories: {{meal.calories}}</p>
  </div>
  `
})
export class DisplayMealDetailsComponent {
  public meal: Meal;
}
