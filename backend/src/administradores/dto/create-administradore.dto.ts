import { IsNotEmpty, IsUUID } from "class-validator";
export class CreateAdministradorDto {
    @IsNotEmpty({
        message: "El código de administrador no puede estar vacío"
    })
    @IsUUID('4')
    administrador_id: string;
}
