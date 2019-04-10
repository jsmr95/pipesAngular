import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domsanitizer:DomSanitizer) {

  }

  transform(value: string, url: string): any {
    return this.domsanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
//Este pipe lo hemos creado desde la consola: ng g p pipes/domseguro
//value es el valor de video en app.component.ts
//url es la url previa del video que será pasada como parametro
