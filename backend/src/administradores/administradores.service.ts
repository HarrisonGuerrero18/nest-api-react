import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administradore.dto';
import { UpdateAdministradorDto } from './dto/update-administradore.dto';

@Injectable()
export class AdministradoresService {

    constructor(private prismaService: PrismaService) { }

    async create(createAdministradorDto: CreateAdministradorDto) {
        await this.prismaService.administradorSistema.create({
            data: {
                administrador_id: createAdministradorDto.administrador_id,
            }
        })
    }

    async findAll() {
        return this.prismaService.administradorSistema.findMany();
    }

    async findOne(administrador_id: string) {
        this.prismaService.administradorSistema.findUnique({
            where: { administrador_id },
        });

        if (!administrador_id) {
            throw new Error(`Administrador con id ${administrador_id} no encontrado`)
        }
    }

    async update(administrador_id: string, updateAdministradoreDto: UpdateAdministradorDto) {
        await this.prismaService.administradorSistema.update({
            where: { administrador_id },
            data: updateAdministradoreDto,
        });
    }

    async remove(administrador_id: string) {
        await this.prismaService.administradorSistema.delete({
            where: { administrador_id },
        })

        return { message: `Administrador con ${administrador_id} eliminado exitosamente` };
    }
}
