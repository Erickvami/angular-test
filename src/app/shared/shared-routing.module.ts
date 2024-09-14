import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [
    RouterModule,
  ],
})
export class SharedRoutingModule { }
