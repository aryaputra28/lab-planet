import { Injectable } from '@nestjs/common';
import { CreateConverterDTO } from './dto/data-post.dto';

@Injectable()
export class ConverterService {
  list_object = [
    'sun',
    'mercury',
    'venus',
    'earth',
    'moon',
    'mars',
    'jupyter',
    'saturn',
    'uranus',
    'neptune',
    'pluto',
  ];
  dict_gravity = {
    sun: 27.01,
    mercury: 0.38,
    earth: 1,
    venus: 0.91,
    moon: 0.166,
    mars: 0.38,
    jupyter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    pluto: 0.06,
  };

  postWeight(data: CreateConverterDTO) {
    const new_weight = data.yourWeight * this.dict_gravity[data.yourPlanet];
    return {
      yourWeight: data.yourWeight,
      yourPlanet: data.yourPlanet,
      newWeight: new_weight,
    };
  }

  getAllPlanet() {
    return this.list_object;
  }

  getAllWeight() {
    return this.dict_gravity;
  }
}
