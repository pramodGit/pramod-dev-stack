import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ts-promise-all',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './promiseAll-typescript.component.html',
  styleUrls: ['../CSS/dashboard.component.css'],
})
export class PromiseAllTypescript {
    codeSnippet1 = `
        const P1 = new Promise<unknown>(resolve => {
                resolve({"name": "Pramod", "age": 42});
                // resolve("Promise 1 resolved");
            }
        );

        async function allF ():Promise<void> {
            const [R1] = await Promise.all([P1]);
            console.log(R1);
        }

        allF();
    `;

    codeSnippet2 = `
        interface Person {
            name: string;
            age: number;
        }

        const P1 = new Promise<string | Person>((resolve) => {
            if (Math.random() > 0.5) {
                resolve("Promise 1 resolved");
            } else {
                resolve({ name: "Pramod", age: 42 });
            }
        });

        async function allF(): Promise<void> {
            const [R1] = await Promise.all([P1]);

            if (typeof R1 === "string") {
                console.log(R1.toUpperCase());
            } else {
                console.log(R1.name, R1.age);
            }
        }

        allF();
    `;

    codeSnippet3 = `
        { name: 'Pramod', age: 42 }
    `;
}
