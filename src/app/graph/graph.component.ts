import { Component, OnInit } from '@angular/core';
import { BackendTrueupService } from '../backend-trueup.service';
import { CapabilityService } from '../capability.service';
import { LoadingServiceService } from '../loading-service.service';
import { Input } from '../model/Input';
import { OutputModel } from '../model/OutputModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trueup',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  loading$=this.loader.loading$;

  constructor(private caps: CapabilityService, private service: BackendTrueupService, private loader:LoadingServiceService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.capabilities=this.caps.capability();
    console.log(this.capabilities)
  }
 capabilities:any=[];
 spaces:any=[];
 selectedItems: any = [];
  output: any=[];
  isTable:boolean=false;
  isContent:boolean=true;
  isButton:boolean=false;

 org:string="";
 cab:string="";
 spa:string="";
 health:string="";
 cap: string="";



 show: boolean = false;
 show1: boolean = false;
 show2: boolean = false;

 changeSelect(capability:any){
  console.log(capability.target.value)
  this.cab=capability.target.value;
  this.spaces=this.caps.space().filter(space=> space.id==capability.target.value)
  console.log(this.spaces)
  
 }

 changeSelectOrg(org:any){
  console.log(org.target.value)
  this.org=org.target.value;
 }

 changeSelectSpace(space:any){
  console.log(space.target.value)
  this.spa=space.target.value;

 }

//  hideloader() {
//   // Setting display of spinner
//   // element to none
//   document.getElementById("loading")
//   document.getElementById('loading')
//       .style.display = 'none';
// }

 
 popMe()
 {
  if(this.org ==""){
    this.show=true;
  }
  if(this.cab==""){
    this.show1=true;
  }
  if(this.spa==""){
    this.show2=true;
  }
if(this.org !=="")
{
  this.show=false;
}
if(this.cab !==""){
  this.show1=false;
}
if(this.spa !==""){
  this.show2=false;
}
  if(this.org !=="" && this.cab !=="" && this.spa !==""){
    this.isButton=true;
    this.show=false;
    this.show1=false;
    this.show2=false;
    console.log("All Selected");
  

  console.log(this.org)
  console.log(this.spa)
  let input1=new Input(this.org,this.spa);
  console.log(input1)

    this.service.triggerJob(input1).subscribe((data: any) => {
      this.output=data;
      this.output.infoMsg="TRUE"
      console.log(this.output)
      this.isContent=false;
      this.isTable=true;
      this.isButton=false;
  
    })
    
  }


}


  

}
