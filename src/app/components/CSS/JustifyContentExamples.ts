import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";



@Component({
    "selector": "justify-content-example",
    "templateUrl": "./JustifyContentExamples.html",
    "styleUrls": ["./JustifyContentExamples.css", "./dashboard.component.css"],
    "standalone": true,
    "imports": [CommonModule, RouterLink],
})

export class JustifyContentExamples {
    justifyOptions = [
        { label: "flex-start → all items left-aligned", value: "flex-start" },
        { label: "flex-end → all items right-aligned", value: "flex-end" },
        { label: "center → items centered in container", value: "center" },
        { label: "space-between → even space between, but not on edges", value: "space-between" },
        { label: "space-around → equal space around each item", value: "space-around" },
        { label: "space-evenly → equal space between all areas, including edges", value: "space-evenly" },
    ];
}