import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { TrueupComponent } from './trueup/trueup.component';
import { TrueupDocumentComponent } from './trueup-document/trueup-document.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NetworkInterceptor } from './network.interceptor';
import { SpecificenvdetailsComponent } from './specificenvdetails/specificenvdetails.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { GraphComponent } from './graph/graph.component';
import { GraphdataComponent } from './graphdata/graphdata.component';
import { ExportexcelComponent } from './exportexcel/exportexcel.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TrueupPipelineComponent } from './trueup-pipeline/trueup-pipeline.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    TrueupComponent,
    TrueupDocumentComponent,
    SpecificenvdetailsComponent,
    GraphComponent,
    GraphdataComponent,
    ExportexcelComponent,
    TrueupPipelineComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule

  ],
  providers: [{
    provide: LocationStrategy, 
    useClass: HashLocationStrategy,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi:true
  },
  {
    provide: MatDialogRef,
    useValue: {}
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
