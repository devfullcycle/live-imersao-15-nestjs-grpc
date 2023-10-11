import { Controller, Get } from '@nestjs/common';
import { BolsaValoresService } from './bolsa-valores.service';

@Controller()
export class BolsaValoresController {
  constructor(private readonly bolsaValoresService: BolsaValoresService) {}

  @Get()
  getHello(): string {
    return this.bolsaValoresService.getHello();
  }
}
