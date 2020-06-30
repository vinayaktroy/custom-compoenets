import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-custom-autocomplete',
  templateUrl: './custom-autocomplete.component.html',
  styleUrls: ['./custom-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomAutocompleteComponent),
      multi: true
    }
  ]
})
export class CustomAutocompleteComponent implements OnInit {

  @Input() optionsListing =[];
  searchCtrl = new FormControl('');
  optionsListingTemp;
  alive = true;
  showListing = false;

  onChange: any = () => { };
  onTouched: any = () => { };



  /**
   * function to update model value in parent foerm controls as value in child change
   * @param fn prebuilt fxn by angular forms ControlValueAccessor
   */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /**
  * function to mark touch in parent form control
  * @param fn prebuilt fxn by angular forms ControlValueAccessor
  */

  registerOnTouched(fn) {
    this.onTouched = fn;
  }


  /**
   * called when parent explicilty pass value in control
   * @param value form parent
   */

  writeValue(value) {
    this.searchCtrl.setValue(value)
  }


  constructor() { }

  ngOnInit() {
    this.optionsListingTemp = this.optionsListing;
    this.initEvents();
  }

  initEvents() {
    this.searchCtrl.valueChanges.pipe(debounceTime(200), distinctUntilChanged(), takeWhile(_ => this.alive)).subscribe((str) => {
      if (str && str.trim()) {
        this.onChange(str);
        this.optionsListingTemp = this.optionsListing.filter((res) => res.toLowerCase().includes(str.toLowerCase()));
      }
      else {
        this.onChange('')
        this.optionsListingTemp = this.optionsListing;
      }
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  chooseOption(suggest) {
    this.searchCtrl.setValue(suggest);
    this.showListing = false;
  }

}
