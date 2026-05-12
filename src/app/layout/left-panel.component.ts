import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'left-panel',
    templateUrl: './left-panel.component.html',
    standalone: true,
    imports: [RouterLink]
})
export class LeftPanel {
    nav = []
}