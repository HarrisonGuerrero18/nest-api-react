import { Module } from '@nestjs/common';
import { CoordinadoresService } from './coordinadores.service';
import { CoordinadoresController } from './coordinadores.controller';

@Module({
  controllers: [CoordinadoresController],
  providers: [CoordinadoresService],
})
export class CoordinadoresModule {}
