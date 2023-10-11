import { Injectable } from '@nestjs/common';

@Injectable()
export class BolsaValoresService {
  getHello(): string {
    return 'Hello World!';
  }
}
