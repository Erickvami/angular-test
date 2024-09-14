import { Component } from '@angular/core';
import { SharedRoutingModule } from '../../shared/shared-routing.module';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
  standalone: true,
  imports: [SharedRoutingModule]
})
export class DefaultLayoutComponent {

}
