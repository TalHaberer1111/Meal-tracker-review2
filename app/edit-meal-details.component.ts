import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
  <h3>Edit Meal Properties: </h3>
  <h5>Edit name</h5>
  <input [(ngModel)]="meal.name" id="mealName" class="col-sm-5 input-lg meal-form" type="text">
  <br>
  <h5>Edit description</h5>
  <input [(ngModel)]="meal.description" class="col-sm-5 input-lg meal-form" type="text">
  <br>
  <h5>Edit calories</h5>
  <input [(ngModel)]="meal.calories" class="col-sm-5 input-lg meal-form" type="text">
  <br>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
