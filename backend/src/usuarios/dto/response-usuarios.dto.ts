import { Expose, Transform } from 'class-transformer'

export class ResponseUsuarioDto {
  @Expose()
  usuario_id: string;

  @Expose()
  nombres: string;

  @Expose()
  apellidos: string;

  @Expose()
  correoInstitucional: string;

  @Expose()
  @Transform(({ value }) => value ? value.toISOString() : null)
  fecha_creacion: Date;

  @Expose()
  @Transform(({ value }) => value ? value.toISOString() : null)
  ultimoAcceso: Date;
}