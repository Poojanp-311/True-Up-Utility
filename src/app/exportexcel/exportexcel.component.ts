import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'
import { BackendTrueupService } from '../backend-trueup.service';
import { ExcelReport } from '../model/ExcelReport';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver'
import { Input2 } from '../model/Input2';
import { LoadingServiceService } from '../loading-service.service';


@Component({
  selector: 'app-exportexcel',
  templateUrl: './exportexcel.component.html',
  styleUrls: ['./exportexcel.component.css']
})
export class ExportexcelComponent{

  isChecked : boolean=false;
   name:any="";
  // // nameCtrl: FormControl;
   form:FormGroup
  //  names = ["billsummary-rsp","addresslookup-rsp","addressverification-rsp"];
   

  
  // Excels: Array<any> = [
  //   { name: 'billsummary-rsp', value: 'billsummary-rsp'},
  //   { name: 'addressupdate-rsp', value: 'addressupdate-rsp'},
  //   { name: 'addressverification-rsp', value: 'addressverification-rsp'},
  //   { name: 'addresslookup-rsp', value: 'addresslookup-rsp'},
  // ];

  constructor(private fb: FormBuilder, private service: BackendTrueupService, private httpClient: HttpClient, private loader:LoadingServiceService) { 
    this.form=this.fb.group({
       checkArray:this.fb.array([]),
       
      //  'billhistory-rsp': false,
      //  'addressupdate-rsp': false
    })
  }

  // constructor(private service: BackendTrueupService) {
  //   this.nameCtrl = new FormControl();
  //   // this.filteredStates = this.nameCtrl.valueChanges.pipe(
  //   //   map(state => state ? this.filterItem(state) : [])
  //   // )
    
   
  // }
 
  onCheckBoxChange(e:any){
    // const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
   
    // console.log(checkArray);
    if(e.target.checked){
      checkArray.push(new FormControl(e.target.value));
      this.branches.appName = e.target.value;
      console.log("target_name " + e.target.value);
    }else{
       var i=0;
      checkArray.controls.forEach((item: any) => {
           if(item.value==e.target.value){
            checkArray.removeAt(i);
            return;
           }
           i++;
      });
      
    }
    
   }

  // onCheckBoxChange(name:any){
  //   console.log(name.target.checked)
  //      this.name=name.target.value;
  // }


  // submitForm(){
    
  //   console.log(this.form.value);
    
  //   let input1 = new ExcelReport(this.Excels);
  //   // let input1 = new ExcelReport(this.form.value);
  //   console.log(input1)
  //   this.service.triggerExcel(input1).subscribe((data: any) => {
  //         //  this.submitForm();
  //          this.Excels=data;
           
  //   })
  // }

  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };

  private reportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch (httpEvent.type) {
      // case HttpEventType.UploadProgress:
      //   this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
      //   break;
      // case HttpEventType.DownloadProgress:
      //   this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
      //   break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          console.log(httpEvent.headers.keys())
          // saveAs(new File([httpEvent.body!], "Out.csv",
          //   { type: "text/csv" }));
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
      default:
        console.log(httpEvent);
        break;

    }
  }


  loading$=this.loader.loading$;
  branches: any=[];
  isContent:boolean=true;
  isButton:boolean=false;

 
  str: string = "";
  arrStr: any = [];
  submitForm(){
    // console.log("appName " + this.branches.appName);
    console.log("BranchName " + this.branches);
    

    this.str = this.branches.appName;
    this.arrStr ={};
    //  this.str += "," + this.str ;
     this.arrStr[0] = this.str;
     this.arrStr[1] = "addressverification-rsp";
     console.log(this.arrStr);
    //  this.arrStr = {this.str}[0];
    this.httpClient.get("http://localhost:9091/export/"+this.arrStr[0] + "," + this.arrStr[1]).subscribe((event: any) => {
    // this.service.download(this.branches.appName).subscribe(event => {
      console.log(this.branches.applist);
      
      console.log(event);
      this.reportProgress(event);
    })

  }

 
  clickMe(){    
    this.httpClient.get("http://localhost:9091/branch/DSG-CHARGE/RSP").subscribe((data: any) => {
      this.branches=data;
      console.log(this.branches.appName)
      this.isContent=false;
      this.isButton=false;
    }) 
  }

 
 

}
