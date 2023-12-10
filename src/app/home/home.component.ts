import { Component, OnInit } from '@angular/core';
import { TrueupDocumentComponent } from '../trueup-document/trueup-document.component';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createApp() {
    let blurVariable = document.getElementById("body") as HTMLElement;
    blurVariable.style.filter = 'blur(5px)';
    console.log("Generate comparison result button cliked!")
    let dialogRef = this.dialog.open(TrueupDocumentComponent, { height: "430px", width: "800px", disableClose: true, position: {top:'125px'
    },closeOnNavigation:true });
  }

  
  

}


