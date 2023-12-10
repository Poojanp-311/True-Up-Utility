import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GitModel } from '../model/GitModel';
import { karateService } from '../services/karateService';

@Component({
  selector: 'app-trueup-pipeline',
  templateUrl: './trueup-pipeline.component.html',
  styleUrls: ['./trueup-pipeline.component.css']
})
export class TrueupPipelineComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TrueupPipelineComponent>,private service: karateService) { }

  
  rev1: boolean = false;
  artifactUrl: string = '';
  messageSuccess: boolean = true;
  build1: boolean = true;
  build2: boolean = false;
  url: string = '';
  pipelineOutput: string = '';
  jobStatusLast: string = '';
  jobOutput: string = '';
  status: string = '';
  pipelineId: string = '';
  jobUrl: string = '';
  job: string = '';
  job2: string = '';
  show: boolean = false;
  show1: boolean = false;
  show11: boolean = false;

  show2: boolean = false;
  show3: boolean = false;
  show7: boolean = false;

  show8: boolean = false;

  isEnabled: boolean = true;
  isEnabled2: boolean = true;
  rev3: boolean=false;
  show5: boolean=false;
  show4: boolean=false;
  existingPipeline: string=''


  ngOnInit(): void {
  }

  checkExistingPipeline(){
    this.show4=true;
    this.service.CheckPipelines("https://gitlab.com/api/v4/projects/29249469/pipelines").subscribe((data: any)=>{
      // console.log(data)
      data.reverse().forEach(
        (value: any, key: any) => {
        console.log(value.ref)
        if(value.ref=="feature/COCIDCS-6261_SamsonSequence"){
          console.log("Hi Condition")
          if(value.status!="running" && value.status!="failed"){

          console.log(value.web_url);
         
          this.existingPipeline=value.web_url
          this.pipelineId=value.id
            
          }
          

          

         
        
         
        }
        
         
    } );

    this.jobUrl = "https://gitlab.com/api/v4/projects/29249469/pipelines/" + this.pipelineId + "/jobs?scope[]=manual&scope[]=failed";
    this.service.triggerJob(this.jobUrl).subscribe((data: any) => {
      console.log(data)
      
      data.reverse().forEach(
        (value: any, key: any)=>{
          if(value.name=="deploy_qlab07")
          {
            console.log("hi condition 2")
            this.job=value.id
            console.log("Job ID" +this.job )
            console.log("Job name" +value.name )

          }

          if(value.name=="switch_route_qlab07"){

            console.log("hi condition 2")
            this.job2=value.id
            console.log("Job ID" +this.job2 )
            console.log("Job name" +value.name )

          }
        }
      )

    })

    
    })

   
   
  }
  

  triggerPipeline() {
    
  
    this.pipelineOutput ="Checking Info...";
    console.log("Run pipeline button clicked!");
    
    let pipeline1 = new GitModel("[TRIGGER-TOKEN]", "feature/COCIDCS-6261_SamsonSequence");
    

    console.log("Pipeline created" );
    this.service.triggerPipeline(pipeline1).subscribe((data: any) => {
      
      
      console.log("Pipeline URL --> " + this.url)
      this.pipelineId = data.id;
      this.pipelineOutput = data.web_url;
      this.show=true;
      this.rev1=true;
      

     })

  }

  triggerJob1() {
    this.show2 = true;
    this.jobOutput="Deploying App..."
    this.jobUrl = "https://gitlab.com/api/v4/projects/29249469/jobs/" + this.job + "/play";
    this.service.triggerJob1(this.jobUrl).subscribe((data: any) => {
      this.show2 = true;
      console.log("Compare results button clicked!")

      this.jobOutput = "Deployment is in progress..."
      console.log("Comparison job running in gitlab pipeline.")
      console.log("The running job id --> " + data.id)

     

      setTimeout(() => {
        this.service.getJobStatus2("https://gitlab.com/api/v4/projects/29249469/jobs/" + this.job).subscribe((data: any) => {
  
          this.jobStatusLast = data.status;
          console.log("Getting the status of the manual job --> " + this.jobStatusLast)
  
          if (this.jobStatusLast == "success") {
            this.jobOutput = "Application deployed successfully!"
          }
          else {
            this.show2 = false;
            this.show11 = true;
            this.jobOutput = "Deployment Failed"
            console.log("Deployment Failed")
  
          }
  
        })
  
      }, 70000);
  

    }

    )

    



  }


  triggerJob2() {
    this.show2 = true;
    this.jobOutput="Deploying App..."
    this.jobUrl = "https://gitlab.com/api/v4/projects/29249469/jobs/" + this.job2 + "/play";
    this.service.triggerJob1(this.jobUrl).subscribe((data: any) => {
      this.show2 = true;
      console.log("Compare results button clicked!")
      this.jobOutput = "Routing traffic...."
      console.log("Comparison job running in gitlab pipeline.")
      console.log("The running job id --> " + data.id)

    }

    )

    



  }





  close() {
    this.dialogRef.close("Thanks for using me!");
    let blurMode = document.getElementById("body") as HTMLElement;
    blurMode.style.filter = 'blur(0px)';
    // window.location.reload();

  }

  

}
