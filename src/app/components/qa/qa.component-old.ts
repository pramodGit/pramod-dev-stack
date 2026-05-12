// import { AfterViewChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import Accordian from "../../shared/accordian.component";
// import { NgIf } from '@angular/common';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'questions-answer',
//   imports: [Accordian, NgIf],
//   template: `
//     <ng-container *ngIf="isLoading; else loaded">
//       <!-- Loading Spinner or any loading fallback -->
//       <div class="loading-spinner">Loading...</div>
//     </ng-container>
//     <ng-template #loaded>
//       <accordian [data]="accordianData" (demoOutputEvent)="handleOutput($event)"></accordian>
//     </ng-template>
//   `,
//   styles: ``
// })
// export class QuestionsAnswers implements OnInit, AfterViewChecked {
//   handleOutput(item: string) {
//     console.log(item);
//   }
//   accordianData = [
//     {
//       title: "Angular Pipes",
//       description: "Pipes are a way to format, filter, and manipulate data in short transform data before displaying it in your templates without modifying the underlying data source."
//     },
//     {
//       title: "Pure Impure Pipes uses",
//       description: "Use pure pipes when dealing with immutable data and impure pipes when your transformations might have side effects or depend on external state changes."
//     },
//     {
//       title: "Component Lifecycle",
//       description: "A component's lifecycle is the sequence of steps that happen between the component's creation and its destruction. https://angular.dev/guide/components/lifecycle#ngaftercontentchecked"
//     }
//   ];
//   isLoading = true;
//   ngOnChanges(): void {console.log("QA : Onchanges Class : ngOnChanges LC Method");}
//   ngOnInit(): void {
//     this.isLoading = false;
//     console.log("QA : OnInit Class : ngOnInit LC Method");
//   }
//   ngDoCheck(): void {console.log("QA : DoCheck Class : ngDoCheck LC Method");}
//   ngAfterContentInit(): void {console.log("QA : AfterContentInit Class : ngAfterContentInit LC Method");}
//   ngAfterContentChecked(): void {console.log("QA : AfterContentChecked Class : ngAfterContentChecked LC Method");}
//   ngAfterViewInit(): void {console.log("QA : AfterViewInit Class : ngAfterViewInit LC Method");}
//   ngAfterViewChecked(): void {console.log("QA : AfterViewChecked Class : ngAfterViewChecked LC Method");}
//   ngOnDestroy(): void {console.log("QA : OnDestroy Class : ngOnDestroy LC Method");}
// }
