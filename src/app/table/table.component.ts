import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @ViewChildren('checkbox') checkboxes: QueryList<ElementRef>;
  quantidade: number = 0;
  checkedAll: boolean;

  addQuantity(isChecked: boolean) {
    isChecked ? this.quantidade++ : this.quantidade--;
    if(this.quantidade < 0) {
      this.quantidade = 0
    }
  }

  checkAll(event: any) {
    this.checkboxes.forEach(() => this.addQuantity(event.target.checked));
    
    if(this.quantidade < 0) {
      this.quantidade = 0;
    } else if(this.quantidade > this.checkboxes.length) {
      this.quantidade = this.checkboxes.length;
    }
  }
}
