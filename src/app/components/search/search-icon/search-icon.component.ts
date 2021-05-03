import { Component, OnInit } from '@angular/core';
import {SearchComponent} from "../../search/search.component";
import {Router} from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-icon',
  templateUrl: './search-icon.component.html',
  styleUrls: ['./search-icon.component.css']
})
export class SearchIconComponent implements OnInit {

  constructor(
    private router:Router,
    private dialogSearch:MatDialog
  	) { }

  ngOnInit(): void {
  }

 openSearch(){
      this.router.navigate(['/search-result']);
      this.dialogSearch.open(SearchComponent,{
        panelClass:'dialog-container-custom'
      })

   }
}
