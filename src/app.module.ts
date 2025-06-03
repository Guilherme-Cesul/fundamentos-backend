import { Module } from '@nestjs/common';
import { CreateProductController } from './create-product.controller';
import { PrismaService } from 'prisma.service';
import { CreateProductService } from './create-product.service';
import { ProductsRepository } from './products.repository';
import { CreateModelController } from './create-model.controller';
import { CreateModelService } from './create-model.service';
import { ModelsRepository } from './models.repository';
import { FetchRecentProductsController } from './fetch-recent-products.controller';
import { FetchRecentProductsService } from './fetch-recent-products.service';
import { FetchRecentModelsController } from './fetch-recent-models.controller';
import { FetchRecentModelsService } from './fetch-recent-models.service';



@Module({
  imports: [],
  controllers: [CreateProductController, CreateModelController, FetchRecentProductsController, FetchRecentModelsController],
  providers: [PrismaService, CreateProductService, ProductsRepository, CreateModelService, ModelsRepository, FetchRecentProductsService, FetchRecentModelsService],
})
export class AppModule {}
