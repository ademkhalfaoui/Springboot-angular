import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ChartModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
