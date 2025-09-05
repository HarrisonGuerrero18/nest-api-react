export class administrador {
    
    constructor(
            private _id : number,
            private _nombres: string,
            private _apellidos: string, 
            private _username: string,
            private _perfil: string,
            private _portada: string,
            private _biografia: string,
            private _telefono: string
        ){}
        public get id (){
            return this._id; 
        }
        
        public get nombres (){
            return this._nombres; 
        }

        public get apellidos (){
            return this._apellidos; 
        }

        public get username (){
            return this._username; 
        }

        public get perfil (){
            return this._perfil; 
        }

        public get portada (){
            return this._portada; 
        }

        public get biografia (){
            return this._biografia; 
        }

        public get telefono (){
            return this._telefono; 
        }
}