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
        setTimeout(resolve(100), 300);
        //setTimeout(reject(0), 400);
    });
    promise
    .then((result) => {
        console.log(\`First "then" & Promise result => \${result}\`);
        return 300;
    })
    .then((result) => {
        setTimeout(() => { console.log(\`Second "then" & Promise result => \${result}\`);}, 200);
        return 200;
    })
    .then(result => console.log(\`Third "then" & Promise result => \${result}\`))
    .catch(error => console.error('Error:', error)); // Error handling

    // Console Result

    First "then" & Promise result => 100
    Third "then" & Promise result => 200
    Second "then" & Promise result => 300
    `;

    codeSnippet2 = `
    const func = async () => {
        try {
            let promise1 = new Promise((resolve) => {
                resolve(100);
            });

            let promise2 = new Promise((resolve) => {
                setTimeout(() => resolve(200), 1000);
            });

            let promise3 = new Promise((resolve) => {
                setTimeout(() => resolve(300), 100);
            });

            console.log(await promise1);
            console.log(await promise3);
            console.log(await promise2);

        } catch (error) {
            console.log("Error:", error); // Error handling
        }
    };

    func();
    
    // Console result

    100
    300
    200
    `;
}
