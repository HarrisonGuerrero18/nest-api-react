import { Injectable } from '@nestjs/common';
import { CreateCoordinadoreDto } from './dto/create-coordinadore.dto';
import { UpdateCoordinadoreDto } from './dto/update-coordinadore.dto';

@Injectable()
export class CoordinadoresService {
  create(createCoordinadoreDto: CreateCoordinadoreDto) {
    return 'This action adds a new coordinadore';
  }

  findAll() {
    return `This action returns all coordinadores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coordinadore`;
  }

  update(id: number, updateCoordinadoreDto: UpdateCoordinadoreDto) {
    return `This action updates a #${id} coordinadore`;
  }

  remove(id: number) {
    return `This action removes a #${id} coordinadore`;
  }
}
