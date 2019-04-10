import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(contrasena: string, activar: boolean): any {
    let res = "";
    if (activar){
      for (let i = 0; i<contrasena.length; i++){
        res +='*';
      }
      return res;
    }
    return contrasena;
  }

}
