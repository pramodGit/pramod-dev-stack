import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signal.state.management.html',
  styleUrls: ['./counter.component.css', 'signal.state.management.css']
})
export class SignalStateManagement {
  readonly count = signal(0);
  readonly step = signal(1);

  readonly steps = [1, 5, 10];

  increment = () => this.count.update(v => v + this.step());

  decrement = () => this.count.update(v => v - this.step());

  reset = () => {
    this.count.set(0);
    this.step.set(1);
  };

  codeTS = `
    export class SignalStateManagement {
      readonly count = signal(0);
      readonly step = signal(1);

      readonly steps = [1, 5, 10];

      increment = () => this.count.update(v => v + this.step());

      decrement = () => this.count.update(v => v - this.step());

      reset = () => {
        this.count.set(0);
        this.step.set(1);
      };
    }
    ---
    <select
      [value]="step()"
      (change)="step.set(+$any($event.target).value)">
      @for (s of steps; track s) {
        <option [value]="s">{{ s }}</option>
      }
    </select>

    <div class="buttons">
      <button type="button" (click)="decrement()">-</button>
      <button type="button" (click)="increment()">+</button>
      <button type="button" (click)="reset()">Reset</button>
    </div>
  `;
}