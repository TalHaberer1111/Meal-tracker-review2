import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "healthyRating",
  pure: false
})

export class HealthyRatingPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredHealthyRating = args[0];
    if(desiredHealthyRating === "healthy-over-300") {
      return input.filter((meal) => {
        return (meal.healthy && meal.calories > 300);
      });
    } else if (desiredHealthyRating === "notHealthy-under-300") {
      return input.filter((meal) => {
        return (!meal.healthy && meal.calories <= 300);
      });
    } else {
        return input;
    }
  }
}
