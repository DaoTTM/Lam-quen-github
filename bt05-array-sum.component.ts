import { Component } from '@angular/core';

@Component({
  selector: 'app-bt05-array-sum',
  templateUrl: './bt05-array-sum.component.html',
  styleUrls: ['./bt05-array-sum.component.css']
})
export class Bt05ArraySumComponent {
  sumArray(array: number[]): number {
    return array.reduce((acc, cur) => acc + cur, 0);
  }
}
