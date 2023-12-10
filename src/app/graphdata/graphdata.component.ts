import { Component, Input, OnInit } from '@angular/core';
import { BackendTrueupService } from '../backend-trueup.service';
import { GraphComponent } from '../graph/graph.component';
import { HttpClient } from '@angular/common/http';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { OutputModel } from '../model/OutputModel';
import { Input2 } from '../model/Input2';
import { LoadingServiceService } from '../loading-service.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-graphdata',
  templateUrl: './graphdata.component.html',
  styleUrls: ['./graphdata.component.css']
})

export class GraphdataComponent implements OnInit{

  title = 'Graphical Statistics';
  chart:any= [];
 org:string="";
 cap:string="";
  constructor(private service: BackendTrueupService, private http: HttpClient,public dialogRef: MatDialogRef<GraphdataComponent>) { }
  ngOnInit() {
  //  let ip = new Input2(this.org,this.cap);
  //  this.service.triggerGraph(ip).subscribe(
  //   res => {
  //   let aname = (res as unknown as any[]).map(res=>res.appName)
    var chart = new Chart('canvas',{
            type: 'bar',
            data: {
              labels: ['ilab02', 'qlab01', 'qlab03', 'qlab06', 'qlab07', 'plab01'],  // x axis                                 // X axis
              datasets:[                                       // y axis
                {
                  label: 'prodSync: 1',
                  data: [-1,1,1,-1,1,1],
                  // data: [status,status,status,status,status,status,status,status],
                  // borderColor:'#3CBA9F'
                  backgroundColor: [
                    'rgba(255,26,104,0.2)',
                    'rgba(255,26,104,0.2)',
                    'rgba(255,26,104,0.2)',
                    'rgba(255,26,104,0.2)',
                    'rgba(255,26,104,0.2)',
                    'rgba(255,26,104,0.2)',
                  ],
                  borderColor: [
                    'rgba(255,26,104,1)',
                    'rgba(255,26,104,1)',
                    'rgba(255,26,104,1)',
                    'rgba(255,26,104,1)',
                    'rgba(255,26,104,1)',
                    'rgba(255,26,104,1)',
                  ],
                  borderWidth:1
                // data:brnch,
                // borderColor:'#3CBA9F',
                // fill: false
                },
                // {
                //   label: '2nd Year',
                //   data: [47, 9, 28, 54, 77, 51, 24]
                //   // data:brnch1,
                //   // borderColor:'#FFCC00',
                //   // fill: false,
                //   }
              ]
            },
            options: {
              plugins: {
                legend: {
                  display: true,
                },
              },
              scales: {
                x: {
                  ticks: {
                    display: true,
                  },
                },
                y: {
                    display: true,
                    beginAtZero: true
                },
              },
            }
    })
      // })
  }
  close(){
    this.dialogRef.close("Thanks for using me!");
    let blurMode = document.getElementById("body") as HTMLElement;
    blurMode.style.filter = 'blur(0px)';

  }
}
