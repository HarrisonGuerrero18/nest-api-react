import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

    @Post()
    create(@Body() createAdministradorDto: CreateAdministradorDto) {
      return this.administradorService.create(createAdministradorDto);
    }

 @Get()
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id);
  }

  // El Patch actualiza parcialmente un recurso
  // El Put reemplaza un recurso completo
  // En este caso, usamos Put para reemplazar completamente el administrador con el ID dado
  
  // con recurso nos referimos a la entidad administrador
  // si usamos patch, solo actualizariamos los campos que se envien en el body
  // si usamos put, debemos enviar todos los campos del administrador, 
  // si no se envian todos los campos, los que no se envien se pondran en null o en su valor por defecto

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministradorDto: UpdateAdministradorDto) {
    return this.administradorService.update(+id, updateAdministradorDto);
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() updateAdministradorDto: UpdateAdministradorDto) {
    return this.administradorService.update(+id, updateAdministradorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.administradorService.remove(+id);
    return {
      success : true,
      admin_eliminado: id
    }
  }
}
