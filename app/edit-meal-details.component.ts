import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
  <h3>Edit Meal Properties: </h3>
  <label>Meal Id: {{ meal.mealId }}</label>
  <input [(ngModel)]="meal.name" id="mealName" class="col-sm-8 input-lg meal-form">
  <input [(ngModel)]="meal.description" class="col-sm-8 input-lg meal-form">
  <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-form">
  `
})
export class EditmealDetailsComponent {
  public meal: meal;
}
