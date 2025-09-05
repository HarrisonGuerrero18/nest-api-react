import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdministradorModule } from './administrador/administrador.module';
import { CursosModule } from './cursos/cursos.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AdministradorModule,CursosModule, EstudianteModule, ProfesorModule, PrismaModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
