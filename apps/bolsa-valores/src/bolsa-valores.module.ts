import { Module } from '@nestjs/common';
import { BolsaValoresController } from './bolsa-valores.controller';
import { BolsaValoresService } from './bolsa-valores.service';
import { OrdersModule } from './orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';

const dns =
  'mongodb://root:root@localhost:27017/bolsa_valores?authSource=admin&directConnection=true';

@Module({
  imports: [MongooseModule.forRoot(dns), OrdersModule],
  controllers: [BolsaValoresController],
  providers: [BolsaValoresService],
})
export class BolsaValoresModule {}
