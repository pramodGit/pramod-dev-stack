import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-js-hoc',
    standalone: true,
    templateUrl: './jsHOC.component.html',
    styleUrls: ['../CSS/dashboard.component.css'],
    imports: [RouterLink]
})

export class jsHOCComponent {
    codeSnippet1 = `
    const numbers = [1, 1, 1, 1, 1];
    let sum = 0;

    const forEachRes = numbers.forEach(num => {
        return (sum += num);
    });
    console.log(sum);
    console.log(forEachRes);
    // It doesn't matter what you return inside the callback — forEach ignores it completely. 
    // It's built purely for side effects, not for producing a value.

    console.log(sum); // 5
    console.log(forEachRes); // undefined
    `;
    codeSnippet2 = `
    const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const filteredArray = originalArray.filter(item => item.id > 1);
    filteredArray[0].id = 4;
    console.log(originalArray);
    console.log(filteredArray);

    // filter creates a new array — but it does a shallow copy. It copies the references, not the objects themselves.
    console.log(filteredArray); // [ { id: 2 }, { id: 4 } ]
    // filteredArray[0] === originalArray[1]  // true ✅ same object in memory
    // So when you do filteredArray[0].id = 4, you're mutating the same object that originalArray[1] points to.

    console.log(originalArray); // [ { id: 1 }, { id: 2 }, { id: 4 } ]    
    `;
}