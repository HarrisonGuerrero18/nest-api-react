import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  create(@Body() createusuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createusuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':usuario_id')
  findOne(@Param('usuario_id') usuario_id: string) {
    return this.usuariosService.findOne(usuario_id);
  }

  // El Patch actualiza parcialmente un recurso
  // El Put reemplaza un recurso completo
  // En este caso, usamos Put para reemplazar completamente el administrador con el ID dado

  // con recurso nos referimos a la entidad administrador
  // si usamos patch, solo actualizariamos los campos que se envien en el body
  // si usamos put, debemos enviar todos los campos del administrador, 
  // si no se envian todos los campos, los que no se envien se pondran en null o en su valor por defecto

  @Patch(':usuario_id')
  update(@Param('usuario_id') usuario_id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(usuario_id, updateUsuarioDto);
  }

  @Put(':usuario_id')
  replace(@Param('usuario_id') usuario_id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(usuario_id, updateUsuarioDto);
  }

  @Delete(':usuario_id')
  remove(@Param('usuario_id') usuario_id: string) {
    this.usuariosService.remove(usuario_id);
    return {
      success: true,
      usuario_eliminado: usuario_id
    }
  }
}