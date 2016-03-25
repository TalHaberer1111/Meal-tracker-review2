import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create a new Meal:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addKeg(newName, newDescription, newCalories)">Add</button>
  </div>
  `

})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;

  constructor(){
    this.onSubmitNewMeal = new EventEmitter();

  }
  // addMeal(userName: HTMLInputElement,
  //        userDescription: HTMLInputElement,
  //        userCalories: HTMLInputElement, {
  //   this.onSubmitNewMeal.emit(new Meal(0, userName.value, userDescription.value, parseInt(userCalories.value)));
  //   userName.value = "";
  //   userDescription.value = "",;
  //   userCalories.value = "",;
  // }
}
