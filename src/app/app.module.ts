import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';

const environmentConfig: any = environment.logger;
@NgModule({
  declarations: [
    AppComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel[environmentConfig.level],
      srvrLogLevel: NgxLoggerLevel[environmentConfig.serverLogLevel],
      srvrLoggingURL: environmentConfig.serverURL,
    } as any)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
