import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TrueupPipelineComponent } from '../trueup-pipeline/trueup-pipeline.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TrueupPipelineComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close("Thanks for using me!");
    let blurMode = document.getElementById("body") as HTMLElement;
    blurMode.style.filter = 'blur(0px)';
    // window.location.reload();

  }


}
