import { TipoDocumentoUsuario, RolUsuario, EstadoCuentaUsuario } from "generated/prisma";

export class Usuario {
    constructor(
        private _usuario_id: string,
        private _correo_institucional: string,
        private _username: string, 
        private _nombres: string,
        private _apellidos: string,
        private _tipo_documento: TipoDocumentoUsuario,
        private _numero_documento: string,
        private _rol: RolUsuario,
        private _password_hash: string,
        private _estado_cuenta: EstadoCuentaUsuario,
        private _fecha_creacion: Date,
        private _ultimo_acceso: Date,
        private _perfil_url: string,
        private _portada_url: string,
        private _telefono: string,
        private _descripcion: string
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
