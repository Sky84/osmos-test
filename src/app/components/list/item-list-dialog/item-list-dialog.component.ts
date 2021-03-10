import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-list-dialog',
  templateUrl: './item-list-dialog.component.html',
  styleUrls: ['./item-list-dialog.component.scss']
})
export class ItemListDialogComponent {
  Object = Object;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
