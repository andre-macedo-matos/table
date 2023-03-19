import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})

export class TableRowComponent {
  @Input() index: number = 0;
  @Output() check = new EventEmitter<boolean>();

  @Input() isAllChecked: boolean;
  @Output() isAllCheckedChange = new EventEmitter<boolean>();

  checkOption(event: any) {
    this.check.emit(event.target.checked);
  }


}
