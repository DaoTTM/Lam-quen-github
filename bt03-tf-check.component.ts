import { Component } from '@angular/core';

@Component({
  selector: 'app-even-check',
  templateUrl: './bt03-even-check.component.html',
  styleUrls: ['./bt03-even-check.component.css']
})
export class EvenCheckComponent {
  isEven(n: number): boolean {
    return n % 2 === 0;
  }
}
