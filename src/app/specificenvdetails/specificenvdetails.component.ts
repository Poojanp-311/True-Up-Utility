import { Component, OnInit } from '@angular/core';
import { BackendTrueupService } from '../backend-trueup.service';
import { CapabilityService } from '../capability.service';
import { LoadingServiceService } from '../loading-service.service';
import { Input } from '../model/Input';
import { Input2 } from '../model/Input2';
import { HttpClient } from '@angular/common/http';
import { ExcelReport } from '../model/ExcelReport';
import { MatDialog } from '@angular/material/dialog';
import { GraphdataComponent } from '../graphdata/graphdata.component';



@Component({
  selector: 'app-specificenvdetails',
  templateUrl: './specificenvdetails.component.html',
  styleUrls: ['./specificenvdetails.component.css']
})
export class SpecificenvdetailsComponent implements OnInit {
 
  p : number = 1;
  loading$=this.loader.loading$;

  constructor(private service: BackendTrueupService, private loader:LoadingServiceService, private httpClient: HttpClient,public dialog: MatDialog) { }
  

  ngOnInit(): void {
    
  }
  
  
 
 spaces:any=[];
 selectedItems: any = [];
  branches: any=[];
  // applist: string[][]={};
 applist: any=[];
  isTable:boolean=false;
  isContent:boolean=true;
  isButton:boolean=false;

 org:string="";
 cap:string="";
 app:string="";



 show: boolean = false;
 show1: boolean = false;
 show2: boolean = false;

op:string=""

 changeSelectOrg(org:any){
  console.log(org.target.value)
  this.org=org.target.value;
 }



 changeSelectCap(cap:any){
  console.log(cap.target.value)
  this.cap=cap.target.value;

 }

 changeSelectApp(app:any){
  console.log(app.target.value)
  this.app=app.target.value;

 }

 changeSelectExcel(applist:any){
  console.log(applist.target.value)
  this.applist=applist.target.value;

 }

 
 popMe()
 {
  if(this.org ==""){
    this.show=true;
  }
  if(this.cap==""){
    this.show1=true;
  }
  if(this.app==""){
    this.show2=true;
  }
 
if(this.org !=="")
{
  this.show=false;
}
if(this.cap !==""){
  this.show1=false;
}
if(this.app !==""){
  this.show2=false;
}

  if(this.org !=="" && this.cap !=="" && this.app !==""){
    this.isButton=true;
    this.show=false;
    this.show1=false;
    this.show2=false;
    console.log("All Selected");
  

  console.log(this.org)
  console.log(this.cap)
  let input1=new Input2(this.org,this.cap);
  console.log(input1)

    if(this.app=="branch"){
      this.service.triggerBranch(input1).subscribe((data: any) => {
        this.branches=data;
        console.log(this.branches)
        this.isContent=false;
        this.isTable=true;
        this.isButton=false;
    
      })
    }

    if(this.app=="commitId"){
      this.service.triggerCommitId(input1).subscribe((data: any) => {
        console.log("commit id logic")
        this.branches=data;
        console.log(this.branches)
        this.isContent=false;
        this.isTable=true;
        this.isButton=false;
    
      })
    }
    
  }


}

popMe2(){
  let input1=new ExcelReport(this.applist);
  console.log(input1)

    this.service.triggerExcel(input1).subscribe((data: any) => {
      this.op=data;
      console.log(this.op)
      this.isContent=false;
      // this.isTable=true;
      this.isButton=false;
  
    })
}



key:any = 'id';
reverse:boolean = false;
sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
}


open() {
  let blurVariable = document.getElementById("body") as HTMLElement;
   blurVariable.style.filter = 'blur(5px)';
  console.log("Generate comparison result button cliked!")
  let dialogRef = this.dialog.open(GraphdataComponent, { height: "400px", width: "650px", disableClose: true, position: {top:'125px'
  },closeOnNavigation:true });
}




}