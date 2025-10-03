import { PrismaService } from 'src/prisma/prisma.service';
import { Usuarios } from './entities/usuarios.entity';
import { Injectable } from '@nestjs/common';
import { CreateUsuariosDto } from './dto/create-usuarios.dto';
import { UpdateUsuariosDto } from './dto/update-usuarios.dto';
import { ResponseUsuarioDto } from './dto/response-usuarios.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsuariosService {

  private usuarios: Usuarios[] = []

  constructor(private prismaService: PrismaService) {

  }

  async create(createUsuariosDto: CreateUsuariosDto): Promise<ResponseUsuarioDto> {
    const usuario = await this.prismaService.usuario.create({
      data: {
        correo_institucional: createUsuariosDto.correo_institucional,
        username: createUsuariosDto.username,
        nombres: createUsuariosDto.nombres,
        apellidos: createUsuariosDto.apellidos,
        tipo_documento: createUsuariosDto.tipo_documento,
        numero_documento: createUsuariosDto.numero_documento,
        rol: createUsuariosDto.rol,
        password_hash: createUsuariosDto.password_hash,
        estado_cuenta: createUsuariosDto.estado_cuenta,
        perfil_url: createUsuariosDto.perfil_url,
        portada_url: createUsuariosDto.portada_url,
        telefono: createUsuariosDto.telefono,
        descripcion: createUsuariosDto.descripcion,
      },
    });

    return plainToInstance(ResponseUsuarioDto, usuario, {
      excludeExtraneousValues: true, 
    });
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: string) {
    return this.usuarios.find(function (usuario) {
      return usuario.usuario_id === id
    })
  }

  update(id: string, updateUsuariosDto: UpdateUsuariosDto) {
    return `Se ha actualizado el Usuario con el ID: ${id}`;
  }

  remove(id: string) {
    this.usuarios = this.usuarios.filter(function (usuario) {
      return usuario.usuario_id !== id
    });
  }
}