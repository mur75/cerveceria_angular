export class registrarusuario{
    _id?: string;
    nombre: string;
    apellido: string;
    correo: string;
    instagram?: string;
    club: boolean;
    ciudad: string;
    direccion: string;
    complementoDireccion: string;
    telefono: number;
    tipoId: string;
    numeroId: number;
    password: string;
    alias: string;

    constructor(nombreUsuario:string, apellido:string, correo: string, instagram:string, club:boolean, ciudad:string, direccion:string, complementoDireccion:string, telefono:number, tipoId:string, numeroId:number, password:string, alias:string){
    this.nombre= nombreUsuario
    this.apellido= apellido
    this.correo= correo
    this.instagram= instagram
    this.club= club;
    this.ciudad= ciudad
    this.direccion= direccion
    this.complementoDireccion= complementoDireccion
    this.telefono= telefono
    this.tipoId= tipoId
    this.numeroId= numeroId
    this.password= password
    this.alias= alias
    }
}
