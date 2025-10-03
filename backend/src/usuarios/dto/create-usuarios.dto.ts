import { TipoDocumentoUsuario, RolUsuario, EstadoCuentaUsuario } from 'generated/prisma';

import { IsEmail, IsOptional, IsNotEmpty, IsString, IsEnum, IsUrl, Length }
  from 'class-validator';

export class CreateUsuariosDto {

  @IsOptional()
  @IsEmail({}, {
    message: "El correo institucional no es válido"
  })
  @Length(1, 100, {
    message: "El correo debe tener máximo 100 caracteres"
  })
  correo_institucional?: string;

  @IsOptional()
  @IsString({
    message: "El username debe ser un texto"
  })
  @Length(1, 50, {
    message: "El username debe tener máximo 50 caracteres"
  })
  username?: string;

  @IsNotEmpty({
    message: "Los nombres del usuario son obligatorios"
  })
  @IsString({
    message: "Los nombres deben ser texto"
  })
  @Length(1, 100, {
    message: "Los nombres deben tener máximo 100 caracteres"
  })
  nombres: string;

  @IsNotEmpty({
    message: "Los apellidos del usuario son obligatorios"
  })
  @IsString({
    message: "Los apellidos deben ser texto"
  })
  @Length(1, 100, {
    message: "Los apellidos deben tener máximo 100 caracteres"
  })
  apellidos: string;

  @IsNotEmpty({
    message: "El tipo de documento es obligatorio"
  })
  @IsEnum(TipoDocumentoUsuario, {
    message: "El tipo de documento no es válido"
  })
  tipo_documento: TipoDocumentoUsuario;

  @IsNotEmpty({
    message: "El número de documento es obligatorio"
  })
  @IsString({
    message: "El número de documento debe ser texto"
  })
  @Length(1, 20, {
    message: "El número de documento debe tener máximo 20 caracteres"
  })
  numero_documento: string;

  @IsNotEmpty({
    message: "El rol del usuario es obligatorio"
  })
  @IsEnum(RolUsuario, {
    message: "El rol no es válido"
  })
  rol: RolUsuario;

  @IsNotEmpty({
    message: "La contraseña del usuario es obligatoria"
  })
  @IsString({
    message: "La contraseña debe ser un texto"
  })
  @Length(1, 255, {
    message: "La contraseña debe tener máximo 255 caracteres"
  })
  password_hash: string;

  @IsNotEmpty({
    message: "El estado de la cuenta es obligatoria"
  })
  @IsEnum(EstadoCuentaUsuario, {
    message: "El estado de cuenta no es válido"
  })
  estado_cuenta: EstadoCuentaUsuario;

  @IsOptional()
  @IsUrl({}, {
    message: "La URL del perfil no es válida"
  })
  perfil_url?: string;

  @IsOptional()
  @IsUrl({}, {
    message: "La URL de la portada no es válida"
  })
  portada_url?: string;

  @IsOptional()
  @IsString({
    message: "El telefono debe ser texto"
  })
  @Length(1, 20, {
    message: "El telefono debe tener máximo 20 caracteres"
  })
  telefono?: string;

  @IsOptional()
  @IsString({
    message: "La descripción debe ser texto"
  })
  descripcion?: string;
}