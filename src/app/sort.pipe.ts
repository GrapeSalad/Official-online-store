import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(input: Album[], desiredSort) {
    var output: Album[] = [];
    if(desiredSort === "Classic Rock"){
      for(var i=0; i<input.length; i++){
        if(input[i].genre === "Classic Rock"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredSort === "Folk Rock"){
      for(var i=0; i<input.length; i++){
        if(input[i].genre === "Folk Rock"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredSort === "Mathcore"){
      for(var i=0; i<input.length; i++){
        if(input[i].genre === "Mathcore"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else{
      return input;
    }

  }

}
