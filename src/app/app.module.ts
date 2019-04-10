import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';

import { AppComponent } from './app.component';

import locales from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
registerLocaleData(locales);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}], //Para poner las fechas en español
  bootstrap: [AppComponent]
})
export class AppModule { }
