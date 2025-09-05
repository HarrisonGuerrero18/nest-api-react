import { administrador } from './../administrador/entities/administrador.entity';
import { Estudiante } from './entities/estudiante.entity';
import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudianteService {
  private estudiantes: Estudiante [] = [
      new Estudiante(1,"estefania","londono sierra", "estefa.edu.co","mp3","foto","chao","302223531"),
      new Estudiante(2,"harrison duvan"," delgado", "delgado@gmail.com","H","foto","😡😡","308763423"),
    ]
  create(createEstudianteDto: CreateEstudianteDto) {
    return 'se ha creado un nuevo adminsitrador';
  }

  findAll() {
    return this.estudiantes;
  }

  findOne(id: number) {
    return this.estudiantes.find(function(Estudiante){
      return Estudiante.id === id
      return "el usuario solicitado no se encuentra disponible"
    })
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `se ha actualizado el estudiante con el ID: ${id}`;
  }

  remove(id: number) {
    this.estudiantes = this.estudiantes.filter(function(est){
      return est.id !== id
    });
  }
}
