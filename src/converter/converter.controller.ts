import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { CreateConverterDTO } from './dto/data-post.dto';

@Controller('converter')
export class ConverterController {
  constructor(private readonly converterService: ConverterService) {}

  @Get('/planet')
  getAllPlanet() {
    return this.converterService.getAllPlanet();
  }

  @Get('/weight')
  getAllPlanetWeight() {
    return this.converterService.getAllWeight();
  }

  @Post('/')
  postYourWeight(@Body() data: CreateConverterDTO) {
    return this.converterService.postWeight(data);
  }
}
