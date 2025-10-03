import { PartialType } from '@nestjs/mapped-types';
import { CreateCoordinadoreDto } from './create-coordinadore.dto';

export class UpdateCoordinadoreDto extends PartialType(CreateCoordinadoreDto) {}
