import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import locales from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(locales);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}], //Para poner las fechas en español
  bootstrap: [AppComponent]
})
export class AppModule { }
