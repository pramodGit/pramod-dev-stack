import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-js-hoc',
    standalone: true,
    templateUrl: './promiseMicrotask.component.html',
    styleUrls: ['../CSS/dashboard.component.css'],
    imports: [RouterLink]
})

export class promiseMicrotaskComponent {
    codeBlock1 = `
        let promise1 = Promise.resolve();
        let promise2 = Promise.resolve();

        promise1
        .then(() => console.log(1))
        .then(() => console.log(2));

        promise2
        .then(() => console.log(3))
        .then(() => console.log(4))
    `;
}