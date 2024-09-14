import { Component } from '@angular/core';
import { SharedRoutingModule } from './shared/shared-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [SharedRoutingModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-test';
  constructor() {

  }
}
