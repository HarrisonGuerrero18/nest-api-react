import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoordinadoresService } from './coordinadores.service';
import { CreateCoordinadoreDto } from './dto/create-coordinadore.dto';
import { UpdateCoordinadoreDto } from './dto/update-coordinadore.dto';

@Controller('coordinadores')
export class CoordinadoresController {
  constructor(private readonly coordinadoresService: CoordinadoresService) {}

  @Post()
  create(@Body() createCoordinadoreDto: CreateCoordinadoreDto) {
    return this.coordinadoresService.create(createCoordinadoreDto);
  }

  @Get()
  findAll() {
    return this.coordinadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coordinadoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoordinadoreDto: UpdateCoordinadoreDto) {
    return this.coordinadoresService.update(+id, updateCoordinadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coordinadoresService.remove(+id);
  }
}
