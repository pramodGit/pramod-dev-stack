import { Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ToDoComponent } from '../components/todo/to-do.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'todo', component: ToDoComponent },
    { path: 'css', loadComponent: () => import('../components/CSS/dashboard.component').then(m => m.DashboardComponentCSS)},
    // { path: 'javascript', loadComponent: () => import('../components/JavaScript/dashboard.component').then(m => m.DashboardComponentJS)},
    
    // 1. MOVE SPECIFIC CHILD PATHS UP ABOVE THE DYNAMIC PARAMETER
    { path: 'angular/counterComponent', loadComponent: () => import('../components/counter/counter.component').then(m => m.CounterComponent)},
    { path: 'angular/componentCommunication', loadComponent: () => import('../components/communication/product.component').then(m => m.ProductComponent)},
    { path: 'css/JustifyContentExamples', loadComponent: () => import('../components/CSS/JustifyContentExamples').then(m => m.JustifyContentExamples)},
    { path: 'javascript/promiseAsync', loadComponent: () => import('../components/JavaScript/promiseAsync.component').then(m => m.PromiseAsync)},
    { path: 'javascript/asyncPromiseAll', loadComponent: () => import('../components/JavaScript/asyncPromiseAll.component').then(m => m.AsyncPromiseAll)},
    
    // 2. PLACED LOWER: Dynamic parameter catchall
    { path: ':category', loadComponent: () => import('../components/qa/qa.component').then(m => m.QuestionsAnswers)},
    
    // 3. Default Redirect
    { path: '', redirectTo: 'angular', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];