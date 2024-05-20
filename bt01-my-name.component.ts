import { Component } from '@angular/core';

@Component({
  selector: 'app-bt01-my-name',
  templateUrl: './bt01-my-name.component.html',
  styleUrls: ['./bt01-my-name.component.css']
})
export class Bt01MyNameComponent {
  getMyName(): string {
    return 'Trần Thị Mộng Đào';
  }
}
