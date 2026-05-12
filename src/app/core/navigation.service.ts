import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Navigation from "../models/navigation.model";


@Injectable({
    providedIn: 'root'
})
export class NavigationService{
    private readonly http: HttpClient = inject(HttpClient);

    public getNavigation(): Observable<Navigation[]> {
        return this.http.get<Navigation[]>(`https://dzs4fietmtf6hgobtp6qchdeoi0nflro.lambda-url.ap-south-1.on.aws/?angular=true`);
    }
}