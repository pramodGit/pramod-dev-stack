import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header.component';
import { LeftPanel } from './layout/left-panel.component';
import { RightPanel } from './layout/right-panel.component';
import { FooterComponent } from './layout/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [FormsModule, RouterOutlet, HeaderComponent, FooterComponent],
  })
  export class AppComponent {
    name = '';
    // ngOnInit() {
    //   throw new Error('AppComponent Component initialization failed!');
    // }
  }