import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCursos',
  standalone: true
})
export class ListcursosPipe implements PipeTransform {

  transform(value: string | string[]): string {
    // Validar que el valor sea una cadena o un arreglo
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return 'No hay cursos disponibles';
    }

    // Si es un arreglo, convertirlo a una cadena
    const cursosArray = Array.isArray(value) ? value : [value];
    
    const formattedCursos = cursosArray.map(curso => {
      console.log('Curso procesado:', curso); // Agregar este log para cada curso
      const cursoNombre = curso.split(':')[0].trim();
      const docentes = this.extractDocentes(curso);
      const notas = this.extractNotas(curso);

      return `<div class="curso">
                <h2>${cursoNombre}:</h2>
                <div class="docentes">
                  <strong>Docentes:</strong><br>
                  <ul>${docentes}</ul>
                </div>
                <div class="notas">
                  <strong>Notas:</strong><br>
                  <ul>${notas}</ul>
                </div>
              </div>`;
    });

    return formattedCursos.join('<br><br>');
  }

  private extractDocentes(curso: string): string {
    const docentesMatch = curso.match(/Docentes: \[(.*?)\]/);
    if (docentesMatch) {
      return docentesMatch[1].split(',').map(docente => `<li>${docente.trim()}</li>`).join('');
    }
    return '<li>Sin Docente</li>'; // Cambiado a lista
  }

  private extractNotas(curso: string): string {
    const notasMatch = curso.match(/Notas: \[(.*?)\]/);
    if (notasMatch) {
      return notasMatch[1].split(',').map(nota => `<li>${nota.trim()}</li>`).join('');
    }
    return '<li>Sin Notas</li>'; // Cambiado a lista
  }
}