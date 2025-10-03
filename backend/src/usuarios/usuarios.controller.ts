import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuariosDto } from './dto/create-usuarios.dto';
import { UpdateUsuariosDto } from './dto/update-usuarios.dto';

@Controller('usuario')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  create(@Body() createusuariosDto: CreateUsuariosDto) {
    return this.usuariosService.create(createusuariosDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne("+id");
  }

  // El Patch actualiza parcialmente un recurso
  // El Put reemplaza un recurso completo
  // En este caso, usamos Put para reemplazar completamente el administrador con el ID dado

  // con recurso nos referimos a la entidad administrador
  // si usamos patch, solo actualizariamos los campos que se envien en el body
  // si usamos put, debemos enviar todos los campos del administrador, 
  // si no se envian todos los campos, los que no se envien se pondran en null o en su valor por defecto

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosDto: UpdateUsuariosDto) {
    return this.usuariosService.update("+id", updateUsuariosDto);
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() updateUsuariosDto: UpdateUsuariosDto) {
    return this.usuariosService.update("+id", updateUsuariosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.usuariosService.remove("+id");
    return {
      success: true,
      usuario_eliminado: id
    }
  }
}