import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatModelos'
})
export class FormatModelosPipe implements PipeTransform {

  transform(modelos: string[], ...args: unknown[]): unknown {
    let fixedValue: string;
    let cant: number = modelos.length;
    if (cant == 1 || cant == 2) {


      return modelos;
    }
    else {
      fixedValue = `[${modelos[0]}-${modelos[cant - 1]}]`

      return fixedValue;
    }
  }


}
