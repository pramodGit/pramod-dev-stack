import { Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ToDoComponent } from '../components/todo/to-do.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'todo', component: ToDoComponent },
    { path: ':category', loadComponent: () => import('../components/qa/qa.component').then(m => m.QuestionsAnswers)},
    // Default to angular if path is empty
    { path: '', redirectTo: 'angular', pathMatch: 'full' },
    { path: 'angular/counterComponent', loadComponent: () => import('../components/counter/counter.component').then(m => m.CounterComponent)},
    { path: 'angular/componentCommunication', loadComponent: () => import('../components/communication/product.component').then(m => m.ProductComponent)},
    { path: '**', component: NotFoundComponent }
];