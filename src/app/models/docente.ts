export class Docente {
    
    id: number;
    apellidoPaterno: string;
    apellidoMaterno: string;
    nombre: string;
    dni: string;
    direccion: string;
    email: string;
    celular: string;
    estado: string;
    cursoIds: number[]; // Cambiado a un arreglo de números
    listaCursos: string;
}