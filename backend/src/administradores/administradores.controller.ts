import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { CreateAdministradorDto } from './dto/create-administradore.dto';
import { UpdateAdministradorDto } from './dto/update-administradore.dto';

@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly administradoresService: AdministradoresService) { }

  @Post()
  create(@Body() createAdministradorDto: CreateAdministradorDto) {
    return this.administradoresService.create(createAdministradorDto);
  }

  @Get()
  findAll() {
    return this.administradoresService.findAll();
  }

  @Get(':administrador_id')
  findOne(@Param('administrador_id') administrador_id: string) {
    return this.administradoresService.findOne(administrador_id);
  }

  @Patch(':administrador_id')
  update(@Param('id') id: string, @Body() updateAdministradorDto: UpdateAdministradorDto) {
    return this.administradoresService.update(id, updateAdministradorDto);
  }

  @Delete(':administrador_id')
  remove(@Param('administrador_id') administrador_id: string) {
    this.administradoresService.remove(administrador_id);
    return {
      succes: true,
      administardor_elimiando: administrador_id
    }
  }
}
