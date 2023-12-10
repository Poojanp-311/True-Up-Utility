import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Input } from './model/Input';
import { Input2} from './model/Input2';
import { ExcelReport } from './model/ExcelReport';



@Injectable({
  providedIn: 'root'
})
export class BackendTrueupService {

  constructor(private httpClient: HttpClient) { }

  triggerJob(endpoint: Input) {
    return this.httpClient.get("http://localhost:9091/"+endpoint.org+"/"+endpoint.space)
  }

  // triggerJob(endpoint: Input) {
  //   return this.httpClient.get("https://demo-act.apps.px-npe02c.cf.t-mobile.com/"+endpoint.org+"/"+endpoint.space)
  // }

  triggerBranch(endpoints: Input2) {
    return this.httpClient.get("http://localhost:9091/branch/"+endpoints.org+"/"+endpoints.cap)
    // return this.httpClient.get("http://localhost:9091/sch");
  }

  triggerCommitId(endpoints: Input2) {
    return this.httpClient.get("http://localhost:9091/trueupstats/"+endpoints.org+"/"+endpoints.cap)
    // return this.httpClient.get("http://localhost:9091/sch");
  }

  // triggerBranch(endpoints: Input2) {
  //   return this.httpClient.get("https://demo-act.apps.px-npe02c.cf.t-mobile.com/branch/"+endpoints.org+"/"+endpoints.cap)
  // }

  triggerGraph(endpoints: Input2) {
    return this.httpClient.get("http://localhost:9091/branch/DSG-CHARGE/RSP")
  }

  // triggerGraph(endpoints: Input2) {
  //   return this.httpClient.get("https://demo-act.apps.px-npe02c.cf.t-mobile.com/branch/DSG-CHARGE/RSP")
  // }

  triggerExcel(endpoint: ExcelReport) {
    return this.httpClient.get("http://localhost:9091/export/"+endpoint.applist);
  }

  private server = 'http://localhost:9091';
  download(applist: string[]): Observable<HttpEvent<Blob>> {
    console.log("applist" + applist);
    return this.httpClient.get(`${this.server}/export/${applist}/`, {

      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }





  triggerPipeline(git: ExcelReport): Observable<ExcelReport> {
      return this.httpClient.post<ExcelReport>("http://localhost:9091/export", git)
    }



}
