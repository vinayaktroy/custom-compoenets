import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAutocompleteComponent } from './custom-autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomAutocompleteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CustomAutocompleteComponent]
})
export class CustomAutocompleteModule { }
