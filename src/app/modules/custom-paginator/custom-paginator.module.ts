import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPaginatorComponent } from './custom-paginator.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomPaginatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomPaginatorComponent
  ]
})
export class CustomPaginatorModule { }
