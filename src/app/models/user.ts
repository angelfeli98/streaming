export class User {
    constructor(_id = '', nombre_usuario = '', email = '', password = ''){
        this._id = _id;
        this.nombre_usuario = nombre_usuario,
        this.email = email,
        this.password = password
    }

    nombre_usuario: string;
    playlits: string[];
    email: string;
    foto: string;
    _id: string;

    password: string;
}
