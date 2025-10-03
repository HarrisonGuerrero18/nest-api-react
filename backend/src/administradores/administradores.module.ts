import { Module } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { AdministradoresController } from './administradores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { Prisma } from 'generated/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [AdministradoresController],
  providers: [AdministradoresService],
})
export class AdministradoresModule { }