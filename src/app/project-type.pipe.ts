import { Pipe, PipeTransform } from '@angular/core';
import {Project} from './project.model';

@Pipe({
  name: 'projectType'
})
export class ProjectTypePipe implements PipeTransform {

  transform(input: Project[], desiredType) {
    var output: Project[] = [];
    if (desiredType === "Product") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Product") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "Charitable") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Charitable") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "Other") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Other") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
