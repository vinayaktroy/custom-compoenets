import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss']
})
export class CustomPaginatorComponent implements OnInit {

  @Input() totalRecords = 100;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 25, 100];

  currentPage = 1;

  lastPage: number;

  pageSizeCtrl = new FormControl(this.pageSize);

  constructor() { }

  ngOnInit() {
    this.lastPageChanges();
  }
  lastPageChanges() {
    let lastPage = (this.totalRecords / this.pageSize).toString();
    if (this.totalRecords % this.pageSize === 0) {
      this.lastPage = parseInt(lastPage);
    } else {
      this.lastPage = parseInt(lastPage) + 1;
    }
  }

  changePage(flag: number) {
    if (flag) {
      if (this.currentPage === this.lastPage) {
        return;
      }
      this.currentPage++;
    } else {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }

  chagePageSize() {
    this.pageSize = +(this.pageSizeCtrl.value);
    this.resetPaginator();
  }

  resetPaginator() {
    this.currentPage = 1;
    this.lastPageChanges();
  }

}
