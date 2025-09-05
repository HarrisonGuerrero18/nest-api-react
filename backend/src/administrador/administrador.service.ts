import { administrador } from './entities/administrador.entity';
import { Injectable } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Injectable()
export class AdministradorService {
  private administradores: administrador [] = [
    new administrador(1, "Harrison David", "Guerrero Palacios", "HarrisonGuerrero18", "<perfil>", "<portada>", "Un pelao' bacán", "304-595-5299"),
    new administrador(2,"Carlos Alberto","Guerrero", "Carlangas", "<perfil>", "<portada>", "Un señor' bacán", "319-756-2436"),
    new administrador(3,"Luz Nelly", "Palacios Rodríguez", "Nellysilla", "<perfil>", "<portada>", "Una mujel bacán", "312-756-7741")
  ]

  create(createAdministradorDto: CreateAdministradorDto) {
    return 'Se ha creado un nuevo Administrador';
  }

  findAll() {
    return this.administradores;
  }

  findOne(id: number) {
    return this.administradores.find(function(admin){
      return admin.id === id
    })
  }

  update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    return `Se ha actualizado el Administrador con el ID: ${id}`;
  }

  remove(id: number) {
    this.administradores = this.administradores.filter(function(admin){
      return admin.id !== id
    });
  }
}