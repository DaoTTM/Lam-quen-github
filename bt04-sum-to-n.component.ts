import { Component } from '@angular/core';

@Component({
  selector: 'app-bt04-sum-to-n',
  templateUrl: './bt04-sum-to-n.component.html',
  styleUrls: ['./bt04-sum-to-n.component.css']
})
export class Bt04SumToNComponent {
  sumToN(n: number): number {
    
    return (n*(n+1))/2;
  }
}
