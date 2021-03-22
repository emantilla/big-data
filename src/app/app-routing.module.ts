import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeographicalAreaComponent } from 'src/app/geographical-area/geographical-area.component';
import { PeriodComponent } from 'src/app/period/period.component';
import { PoliceDistrictComponent } from 'src/app/police-district/police-district.component';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'geographical', component: GeographicalAreaComponent },
  { path: 'period', component: PeriodComponent },
  { path: 'police', component: PoliceDistrictComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
