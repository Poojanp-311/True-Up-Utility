import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsComponent } from '../about-us/about-us.component';
import { TrueupDocumentComponent } from '../trueup-document/trueup-document.component';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

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
  openAboutUs() {
    let blurVariable = document.getElementById("body") as HTMLElement;
    blurVariable.style.filter = 'blur(5px)';
    console.log("Generate comparison result button cliked!")
    let dialogRef = this.dialog.open(AboutUsComponent, { height: "500px", width: "1000px", disableClose: true, position: {top:'125px'
    },closeOnNavigation:true });
  }



}
