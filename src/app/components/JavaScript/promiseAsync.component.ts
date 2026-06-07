import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'js-promise-async',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './promiseAsync.component.html',
  styleUrls: ['../CSS/dashboard.component.css'],
})
export class PromiseAsync {
    codeSnippet1 = `
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(100), 300);
    });
    promise.then((result) => {
        console.log(result);
    return 200;
    })
    .then((result) => {
        setTimeout(() => console.log(result), 300);
    return 300;
    })
    .then((result) => console.log(result));`;

    codeSnippet2 = `
    const func = async () => {
        let promise1 = new Promise((resolve, reject) => {
            resolve(100);
        });
        let promise2 = new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 10);
        });
        let promise3 = new Promise((resolve, reject) => {
            resolve(300);
        });
        await console.log(promise1);
        await console.log(promise2);
        await console.log(promise3);
    };
    func();`;
}
