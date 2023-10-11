import { Test, TestingModule } from '@nestjs/testing';
import { BolsaValoresController } from './bolsa-valores.controller';
import { BolsaValoresService } from './bolsa-valores.service';

describe('BolsaValoresController', () => {
  let bolsaValoresController: BolsaValoresController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BolsaValoresController],
      providers: [BolsaValoresService],
    }).compile();

    bolsaValoresController = app.get<BolsaValoresController>(BolsaValoresController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bolsaValoresController.getHello()).toBe('Hello World!');
    });
  });
});
