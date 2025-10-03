import { TipoDocumentoUsuario, RolUsuario, EstadoCuentaUsuario } from "generated/prisma";

export class Usuarios {
    constructor(
        private _usuario_id: String,
        private _correo_institucional: String,
        private _username: String, 
        private _nombres: String,
        private _apellidos: String,
        private _tipo_documento: TipoDocumentoUsuario,
        private _numero_documento: String,
        private _rol: RolUsuario,
        private _password_hash: String,
        private _estado_cuenta: EstadoCuentaUsuario,
        private _fecha_creacion: Date,
        private _ultimo_acceso: Date,
        private _perfil_url: String,
        private _portada_url: String,
        private _telefono: String,
        private _descripcion: String
    ){}

    public get usuario_id (){
        return this._usuario_id;
    }

    public get correo_institucional (){
        return this._correo_institucional;
    }

    public get username (){
        return this._username;
    }

    public get nombres (){
        return this._nombres;
    }

    public get apellidos (){
        return this._apellidos;
    }

    public get tipo_documento (){
        return this._tipo_documento;
    }

    public get numero_documento (){
        return this._numero_documento;
    }

    public get rol (){
        return this._rol;
    }

    public get password_hash (){
        return this._password_hash;
    }

    public get estado_cuenta (){
        return this._estado_cuenta;
    }

    public get fecha_creacion (){
        return this._fecha_creacion;
    }

    public get ultimo_acceso (){
        return this._ultimo_acceso;
    }

    public get perfil_url (){
        return this._perfil_url;
    }

    public get portada_url (){
        return this._portada_url;
    }

    public get telefono (){
        return this._telefono;
    }

    public get descripcion (){
        return this._descripcion;
    }
}
