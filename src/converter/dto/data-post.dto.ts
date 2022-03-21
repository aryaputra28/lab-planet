import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class CreateConverterDTO {
  @ApiProperty()
  yourWeight: number;

  @ApiProperty()
  yourPlanet: string;
}
