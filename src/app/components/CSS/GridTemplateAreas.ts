import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    "selector": 'app-grid-template-areas',
    "standalone": true,
    "templateUrl": 'GridTemplateAreas.html',
    "styleUrls": ['./dashboard.component.css', './GridTemplateAreas.css'],
    "imports": [RouterLink]
})

export class GridTemplateAreas {
    htmlCode = `
        <section class="grid-template-areas">
            <header>Header</header>
            <aside>Sidebar</aside>
            <main>Main Content</main>
            <footer>Footer</footer>
        </section>
    `;
    cssCode = `
        .grid-template-areas {
            display: grid;
            height: 30vh;
            grid-template-columns: 3fr 1fr; /* Sidebar fixed, content flex */
            grid-template-rows: auto 1fr auto; /* Header/Footer auto, content flex */
            
            grid-template-areas:
                "header header"
                "main sidebar"
                "footer footer";
            }
            .grid-template-areas > * { padding: .5rem; border: 1px dashed #000; background: #f4fff1; }

            /* Assign the areas */
            .grid-template-areas header  { grid-area: header;  }
            .grid-template-areas aside   { grid-area: sidebar; }
            .grid-template-areas main    { grid-area: main; }
            .grid-template-areas footer  { grid-area: footer; height: auto; }
    `;
}