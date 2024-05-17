import { Component } from '@angular/core';

@Component({
  selector: 'app-bt02-sum',
  templateUrl: './bt02-sum.component.html',
  styleUrls: ['./bt02-sum.component.css']
})
export class Bt02SumComponent {
  getSum(a: number, b: number): number {
    return a + b;
  }
}
