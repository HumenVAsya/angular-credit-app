import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BriefInformationComponent } from './components/brief-information/brief-information.component';
import { GeneralTableComponent } from './components/general-table/general-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BriefInformationComponent,
    GeneralTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-app';
}
