import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'js-async-promise-all',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './asyncPromiseAll.component.html',
  styleUrls: ['../CSS/dashboard.component.css'],
})
export class AsyncPromiseAll {
    codeSnippet1 = `
    const asyncFunc = async (test) => {
        console.log(new Date().getTime());
        const details = await test.map(item => item + ' 10');
        console.log(details);
        console.log(new Date().getTime());
      }
      asyncFunc(['Pramod', 'Kumar']);`;

    codeSnippet2 = `
    const promiseFunc = async (test) => {
        console.log(new Date().getTime());
        const details = await Promise.all(
          test.map(item => item + ' 12')  
        );
        console.log(details);
        console.log(new Date().getTime());
        return details;
      }
      promiseFunc(['pramod', 'Kumar']);`;
}
