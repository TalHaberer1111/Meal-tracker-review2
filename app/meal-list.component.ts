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
  <label>Healthy Rating:</label>
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="tapped">Logged Foods</option>
    <option value="notTapped" selected="selected">Show Not Logged</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | tapped:filterTapped"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterTapped: string = "healthy";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  MealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(
      new Meal(this.mealList.length, newMeal.name, newMeal.description, newMeal.calories)
    );
  }
  onChange(filterOption) {
    this.filterTapped = filterOption;
  }
}
