export class Estudiante {
    
    constructor(
        
            private _id : number,
            private _nombres: string,
            private _apellidos: string, 
            private _correoInstitucional: string,
            private _perfil: string,
            private _portada: string,
            private _biografia: string,
            private _telefono: string
            
    
        ){}
        public get id (){
            return this._id; 
        }
        
        public get nombres (){
            return this.nombres; 
        }

        public get apellidos (){
            return this.apellidos; 
        }

        public get correoInstitucional (){
            return this.correoInstitucional; 
        }

        public get perfil (){
            return this.perfil; 
        }

        public get portada (){
            return this.portada; 
        }

        public get biografia (){
            return this.biografia; 
        }

        public get telefono (){
            return this.telefono; 
        }
}
