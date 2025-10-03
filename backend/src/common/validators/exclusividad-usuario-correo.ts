import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { RolUsuario } from 'generated/prisma';

@ValidatorConstraint({ async: false })
export class ExclusividadUsernameCorreoConstraint implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    const dto = args.object as any;

    if (dto.rol === RolUsuario.administrador) {
      // Admin: debe tener username y NO correo
      return !!dto.username && !dto.correo_institucional;
    } else {
      // Otros roles: deben tener correo y NO username
      return !!dto.correo_institucional && !dto.username;
    }
  }

  defaultMessage(args: ValidationArguments) {
    const dto = args.object as any;
    if (dto.rol === RolUsuario.administrador) {
      return 'El administrador debe tener solo username y no correo institucional';
    } else {
      return 'El usuario debe tener solo correo institucional y no username';
    }
  }
}

export function ExclusividadUsernameCorreo(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: ExclusividadUsernameCorreoConstraint,
    });
  };
}
