import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AdministradoresModule } from './administradores/administradores.module';
import { DocentesModule } from './docentes/docentes.module';
import { CoordinadoresModule } from './coordinadores/coordinadores.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { InstitucionesModule } from './instituciones/instituciones.module';
import { ProgramasModule } from './programas/programas.module';

@Module({
  imports: [PrismaModule, UsuariosModule, AdministradoresModule, DocentesModule, CoordinadoresModule, EstudiantesModule, InstitucionesModule, ProgramasModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
