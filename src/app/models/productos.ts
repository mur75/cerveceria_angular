export class Productos {
    _id?: number;
    nombre: string;
    precio: number;
    describcion: string;
    estilo: string;
    casacervezera: string;
    color: string;
    gradoalcohol: number;
    paisorigen: string;
    presentacion: string;
    ibu: number;
    disponibilidad: boolean;
    categoria: string;
    orden?: number;
    imagen?:any;
    fec_cre?: Date;

    constructor(nombre: string, precio: number, describcion: string, estilo: string, casacervezera: string, color: string, gradoalcohol: number, paisorigen: string, presentacion: string, ibu: number, disponibilidad: boolean, categoria: string){
        this.nombre = nombre;
        this.precio = precio;
        this.describcion = describcion;
        this.estilo = estilo;
        this.casacervezera = casacervezera;
        this.color = color;
        this.gradoalcohol = gradoalcohol;
        this.paisorigen = paisorigen;
        this.presentacion = presentacion;
        this.ibu = ibu;
        this.disponibilidad = disponibilidad;
        this.categoria = categoria;
    }
}
