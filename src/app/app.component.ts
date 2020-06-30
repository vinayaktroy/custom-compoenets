import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vinayakFE';
  parentControl = new FormControl('');

  optionsListing = ['One', 'Two', 'Three'];
  prefillAutoComplete() {
    this.parentControl.setValue('one');
  }
}
