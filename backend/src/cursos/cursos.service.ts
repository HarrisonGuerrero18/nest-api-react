import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CursosService {
  constructor(private servicio: PrismaService) {}

  create(createCursoDto: CreateCursoDto) {
    return "This action adds a new curso";
  }

  findAll() {
    return this.servicio.cursos.findMany();
  }

  findOne(id: number) {
    return this.servicio.cursos.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
