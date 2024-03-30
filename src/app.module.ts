import { Module } from '@nestjs/common';

import { ProduitModule } from './produit/produit.module';
import { Service } from './produit/service/produit/.service';
import { ControllerController } from './produit/controller/controller.controller';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ProduitModule, UsersModule],
  controllers: [ControllerController],
  providers: [Service],
})
export class AppModule {}
