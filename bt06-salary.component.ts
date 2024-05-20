import { Component } from '@angular/core';

@Component({
  selector: 'app-bt06-salary',
  templateUrl: './bt06-salary.component.html',
  styleUrls: ['./bt06-salary.component.css']
})
export class Bt06SalaryComponent {
  salaries={
    John: 100,
    Ann: 160,
    Peter: 130
  };

  getTotalSalary(salaries:{[name:string]:number}):number{
    return Object.values(salaries).reduce((acc,cur)=>acc+cur,0);
  }
}
