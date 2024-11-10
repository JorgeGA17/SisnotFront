import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listcursodocente',
  standalone: true
})
export class ListcursodocentePipe implements PipeTransform {


  transform(value: string | string[], format: 'full' | 'names' = 'full'): string {

    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return 'No hay cursos disponibles';
    }

    const cursosArray = Array.isArray(value) ? value : [value];

    if (format === 'names') {

      return cursosArray.map(curso => curso.split(':')[0].trim()).join(', ');
    }

    const formattedCursos = cursosArray.map(curso => {
      const cursoNombre = curso.split(':')[0].trim();
      const alumnos = this.extractAlumnos(curso);


      return `<div class="curso">
                <h2>${cursoNombre}:</h2>
                <div class="docentes">
                  <strong>Alumnos:</strong><br>
                  <ul>${alumnos}</ul>
                </div>
               </div>`;
    });

    return formattedCursos.join('<br><br>');
  }

  private extractAlumnos(curso: string): string {
    const alumnosMatch = curso.match(/Alumnos: \[(.*?)\]/);
    if (alumnosMatch) {
      return alumnosMatch[1].split('/').map(alumno => `<li>${alumno.trim()}</li>`).join('');
    }
    return '<li>Sin Alumno</li>';
  }


}
