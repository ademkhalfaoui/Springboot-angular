import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiqueRoutingModule } from './statistique-routing.module';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    StatistiqueComponent
  ],
  imports: [
    CommonModule,
    StatistiqueRoutingModule,
    ChartModule
  ]
})
export class StatistiqueModule { }
