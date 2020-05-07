export class Discograph {
    constructor(_nombre='', _foto='', id=''){
        this.nombre = _nombre;
        this.foto = _foto;
        this._id = id;
    }
    nombre?: string;
    foto?: string;
    _id?: string;
}
