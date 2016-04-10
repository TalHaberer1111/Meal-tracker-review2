import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {HealthyRatingPipe} from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyRatingPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="showAll">Show All</option>
    <option value="healthy-over-300">Show unhealthy and over 300 calories</option>
    <option value="notHealthy-under-300">Show healthy and under 300 calories</option>
  </select>
  <div class="meal-display" *ngFor="#currentMeal of mealList | healthyRating:filterHealthy"
  (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal===selectedMeal"
  >
    {{currentMeal.name}}
  </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "showAll";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    console.log(clickedMeal.name);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(
      new Meal(this.mealList.length, newMeal.name, newMeal.description, newMeal.calories)
    );
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}
