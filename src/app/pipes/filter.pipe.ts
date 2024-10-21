import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: string, type: string): any[] {
    if (arg === '' || arg.length < 2) return value;

    const result = [];
    for (const item of value) {
      if (type === 'docente') {
        // Filtrado para docentes
        if (item.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          result.push(item);
        }
      } else if (type === 'alumno') {
        // Filtrado para alumnos
        if (
          item.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          item.apellidoPaterno.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          item.apellidoMaterno.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          item.dni.toString().indexOf(arg) > -1
        ) {
          result.push(item);
        }
      }
    }

    return result;
  }
}