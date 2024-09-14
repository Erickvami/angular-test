import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [SharedModule],
  exports: [
    SharedModule
  ],
})
export class SharedPageModule { }
