import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name : 'sorting'
})
export class sortingPipe implements PipeTransform {
  transform(value: any){
    return value.sort();
  }
}
