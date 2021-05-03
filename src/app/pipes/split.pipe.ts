import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(text: string, by: string, index: number = 1) {
    let arr = text.split(by);
    return arr[arr.length - 1] == 'curly_hair_white-1.webp' ? true : false;
  }

}
