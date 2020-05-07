export class Cancion {
    constructor(_nombre='', _imagen='', id='', _artista='' ){
        this.nombre = _nombre;
        this.imagen = _imagen;
        this._id = id;
        this.artista = _artista;
    }

    nombre?: string;
    imagen?: string;
    _id?: string;
    artista?: string;
}
