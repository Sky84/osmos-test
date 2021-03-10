import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ItemListDialogComponent } from './item-list-dialog/item-list-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  paramsSubscribe: Subscription = new Subscription();
  items: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.paramsSubscribe = this.activatedRoute.params.subscribe(params => {
      fetch('https://jsonplaceholder.typicode.com/' + params['type']).then(response => response.json()).then(
        (response: any) => {
          this.displayedColumns = Object.keys(response[0]);
          this.items = new MatTableDataSource(response);
          this.items.paginator = this.paginator;
          this.items.sort = this.sort;
        })
    });
  }

  openDialog(item: any) {
    this.dialog.open(ItemListDialogComponent, {
      data: { ...item }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.items.filter = filterValue.trim().toLowerCase();

    if (this.items.paginator) {
      this.items.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.paramsSubscribe.unsubscribe();
  }

}
