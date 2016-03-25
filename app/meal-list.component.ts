import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {TappedPipe} from './tapped.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onmealSelect'],
  pipes: [TappedPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="tapped">Logged Foods</option>
    <option value="notTapped" selected="selected">Show Not Logged</option>
  </select>
  <keg-display *ngFor="#currentMeal of mealList | tapped:filterTapped"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [keg]="currentMeal">
  </keg-display>
  <edit-meal-details *ngIf="selectedMeal" [keg]="selectedMeal"></edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterTapped: string = "notTapped";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  MealClicked(clickedKeg: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: meal): void {
    this.mealList.push(
      new Meal(this.mealList.length, newMeal.name, newMeal.description, newMeal.calories)
    );
  }
  onChange(filterOption) {
    this.filterTapped = filterOption;
  }
}
