import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { Service } from './service/produit/.service';

@Module({
  controllers: [ControllerController],
  providers: [Service]
})
export class ProduitModule {}
