import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  open(component) {
    this.dialog.open(component)
  }

  close() {
    this.dialog.closeAll();
  }
}
