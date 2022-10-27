export class informacionFacturacion{
    _id?:string;
    nombreApellido?:string;
    identificacion?:number;
    direccionCiudad?:string;
    departamento?:string;
    telefono?:number;
    email?:string;

    constructor(
        _id?:string,
        nombreApellido?:string,
        identificacion?:number,
        direccionCiudad?:string,
        departamento?:string,
        telefono?:number,
        email?:string
    
    ){
            this.nombreApellido = nombreApellido;
            this.identificacion = identificacion;
            this.direccionCiudad = direccionCiudad;
            this.departamento = departamento;
            this.telefono = telefono;
            this.email = email;
    }
}