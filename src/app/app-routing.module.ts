import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { TrueupDocumentComponent } from './trueup-document/trueup-document.component';
import { TrueupComponent } from './trueup/trueup.component';
import { SpecificenvdetailsComponent } from './specificenvdetails/specificenvdetails.component';
import { GraphComponent } from './graph/graph.component';
import { GraphdataComponent } from './graphdata/graphdata.component';
import { ExportexcelComponent} from './exportexcel/exportexcel.component';
import { AboutUsComponent } from './about-us/about-us.component';



const routes: Routes = [
 
  { path: 'header', component: AppHeaderComponent},
  // { path: 'footer', component: AppFooterComponent},
  { path: '', redirectTo:"/home", pathMatch:"full" },
  { path: 'home', component: HomeComponent},
  { path: 'trueup', component: TrueupComponent},
  { path: 'individualbranchdetails', component: SpecificenvdetailsComponent},
  { path: 'trueupdoc', component: TrueupDocumentComponent},
  { path: 'bargraph', component: GraphdataComponent},
  { path: 'exportexcel', component: ExportexcelComponent},
  { path: 'aboutus', component: AboutUsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
