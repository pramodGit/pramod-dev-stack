import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  imports: [FormsModule, CommonModule]
})
export class CounterComponent {
  count = 0;
  step: number = 1;
  steps = [1, 5, 10];

  increment() {
    // this.count++;
    this.count += Number(this.step);
  }

  decrement() {
    // this.count--;
    this.count -= Number(this.step);
  }

  reset() {
    this.count = 0;
    this.step = 1;
  }
}
