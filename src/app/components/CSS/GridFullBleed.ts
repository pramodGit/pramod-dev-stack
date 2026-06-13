import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    "selector": 'app-grid-full-bleed',
    "standalone": true,
    "templateUrl": 'GridFullBleed.html',
    "styleUrls": ['./dashboard.component.css', './GridFullBleed.css'],
    "imports": [RouterLink]
})

export class GridFullBleed {
    htmlCode = `
        <section class="grid-full-bleed-container">
            <h2>Block Heading</h2>
            <article class="full-bleed">Block Full-width content</article>
            <p>More content</p>
            <button>Click</button>
        </section>
    `;
    cssCode = `
        .grid-full-bleed-container {
            display: grid;
            grid-template-columns: 1fr min(60ch, 100%) min(60ch, 100%) 1fr; // or grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        .grid-full-bleed-container > * {
            grid-column: 2 / 4;
            margin: 1rem 0;
        }

        .grid-full-bleed-container .full-bleed {
            grid-column: 1 / -1;
        }
    `;
    cssCode1 = `
        .grid-full-bleed-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        .grid-full-bleed-container > * {
            grid-column: 2; // or grid-column: 2 / 3;
            margin: 1rem 0;
        }

        .grid-full-bleed-container .full-bleed {
            grid-column: 1 / -1;
        }
    `;
}