import { Test, TestingModule } from '@nestjs/testing';
import { CoordinadoresController } from './coordinadores.controller';
import { CoordinadoresService } from './coordinadores.service';

describe('CoordinadoresController', () => {
  let controller: CoordinadoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoordinadoresController],
      providers: [CoordinadoresService],
    }).compile();

    controller = module.get<CoordinadoresController>(CoordinadoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
