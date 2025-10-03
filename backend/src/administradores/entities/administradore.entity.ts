export class Administrador {
    constructor(
        private _administrador_id: string,
    ){}

    public get administrador_id(){
        return this._administrador_id;
    }
}
