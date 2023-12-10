import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trueup-document',
  templateUrl: './trueup-document.component.html',
  styleUrls: ['./trueup-document.component.css']
  
})
export class TrueupDocumentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TrueupDocumentComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close("Thanks for using me!");
    let blurMode = document.getElementById("body") as HTMLElement;
    blurMode.style.filter = 'blur(0px)';
    
  }

}
