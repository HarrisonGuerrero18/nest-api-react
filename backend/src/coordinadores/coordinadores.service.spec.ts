import { Test, TestingModule } from '@nestjs/testing';
import { CoordinadoresService } from './coordinadores.service';

describe('CoordinadoresService', () => {
  let service: CoordinadoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoordinadoresService],
    }).compile();

    service = module.get<CoordinadoresService>(CoordinadoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
