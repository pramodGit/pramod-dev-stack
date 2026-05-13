import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NavigationService } from "../core/navigation.service";
import { SearchService } from "../shared/services/search.service";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports: [CommonModule, RouterLink, RouterLinkActive, ReactiveFormsModule],
    providers: [NavigationService],
})
export class HeaderComponent implements OnInit {
    title = 'Pramod.Dev';
    searchControl = new FormControl();
    constructor(private http: HttpClient, private searchService: SearchService) {}

    private readonly navigationService = inject(NavigationService);
    public navigation = toSignal(this.navigationService.getNavigation(), { initialValue: [] });

    isExternal(link: string): boolean {
        return link.startsWith('http');
    }

    ngOnInit() {
        this.searchControl.valueChanges
        .pipe(
            debounceTime(300),            // Wait 300ms after last key press
            distinctUntilChanged()        // Only emit if value changed
        )
        .subscribe(value => {
            this.searchService.setSearchTerm(value);
        });
    };
}