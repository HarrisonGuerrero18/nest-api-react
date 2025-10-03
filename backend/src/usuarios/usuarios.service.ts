import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ResponseUsuarioDto } from './dto/response-usuarios.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsuariosService {

  constructor(private prismaService: PrismaService) { }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<ResponseUsuarioDto> {
    const usuario = await this.prismaService.usuario.create({
      data: {
        usuario_id: createUsuarioDto.usuario_id,
        correo_institucional: createUsuarioDto.correo_institucional,
        username: createUsuarioDto.username,
        nombres: createUsuarioDto.nombres,
        apellidos: createUsuarioDto.apellidos,
        tipo_documento: createUsuarioDto.tipo_documento,
        numero_documento: createUsuarioDto.numero_documento,
        rol: createUsuarioDto.rol,
        password_hash: createUsuarioDto.password_hash,
        estado_cuenta: createUsuarioDto.estado_cuenta,
        fecha_creacion: createUsuarioDto.fecha_creacion,
        ultimo_acceso: createUsuarioDto.ultimo_acceso,
        perfil_url: createUsuarioDto.perfil_url,
        portada_url: createUsuarioDto.portada_url,
        telefono: createUsuarioDto.telefono,
        descripcion: createUsuarioDto.descripcion,
      },
    });

    return plainToInstance(ResponseUsuarioDto, usuario, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<ResponseUsuarioDto[]> {
    const usuarios = await this.prismaService.usuario.findMany();
    return plainToInstance(ResponseUsuarioDto, usuarios, {
      excludeExtraneousValues: true, // Solo expone lo definido en el DTO
    });
  }

  async findOne(usuario_id: string): Promise<ResponseUsuarioDto> {
    const usuario = await this.prismaService.usuario.findUnique({
      where: { usuario_id },
    });

    if (!usuario) {
      throw new Error(`Usuario con id ${usuario_id} no encontrado`);
    }

    return plainToInstance(ResponseUsuarioDto, usuario, {
      excludeExtraneousValues: true,
    });
  }

  async update(usuario_id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<ResponseUsuarioDto> {
    const usuario = await this.prismaService.usuario.update({
      where: { usuario_id },
      data: updateUsuarioDto,
    });

    return plainToInstance(ResponseUsuarioDto, usuario, {
      excludeExtraneousValues: true,
    });
  }

  async remove(usuario_id: string): Promise<{ message: string }> {
    await this.prismaService.usuario.delete({
      where: { usuario_id },
    })

    return { message: `Usuario con ${usuario_id} eliminado exitosamente` };
  }
}