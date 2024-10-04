import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.length <2 ) return value;

    const resultDocente =[];
    for(const docente of value){
      if(docente.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultDocente.push(docente);
      };
    };

    return resultDocente;
  }

}