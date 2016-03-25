import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "tapped",
  pure: false
})

export class TappedPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredTappedState = args[0];
    if(desiredTappedState === "tapped") {
      return input.filter(function(meal) {
        return meal.tapped;
      });
    } else if (desiredTappedState === "notTapped") {
      return input.filter(function(meal) {
        return !meal.tapped;
      });
    } else {
        return input;
    }
  }
}
