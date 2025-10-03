import { Expose } from 'class-transformer'
import { RolUsuario, EstadoCuentaUsuario } from 'generated/prisma';

export class ResponseUsuarioDto {
  @Expose()
  usuario_id: string;

  @Expose()
  nombres: string;

  @Expose()
  apellidos: string;

  @Expose()
  tipo_documento: string;

  @Expose()
  numero_documento: string;

  @Expose()
  rol: RolUsuario;

  @Expose()
  estado: EstadoCuentaUsuario;

  @Expose()
  telefono: string;

  @Expose()
  ultimoAcceso: Date;
}