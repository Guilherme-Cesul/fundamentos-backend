import { Module } from "@nestjs/common";
import { PrismaService } from "prisma.service";
import { ProductsRepository } from "./products.repository";
import { CreateProductService } from "./create-product.service";
import { CreateProductController } from "./create-product.controller";
import { FetchRecentProductsController } from "./fetch-recent-products.controller";
import { FetchRecentProductsService } from "./fetch-recent-products.service";
import { DeleteProductController } from "./delete-product.controller";
import { DeleteProductService } from "./delete-product.service";
import { GetProductByIdController } from "./get-product-by-id.controller";
import { GetProductByIdService } from "./get-product-by-id.service";
import { UpdateAvailableProductController } from "./update-available-product.controller";
import { UpdateAvailableProductService } from "./update-available-product.service";
import { EditProductController } from "./edit-product.controller";
import { EditProductService } from "./edit-product.service";
import { ModelsModule } from "../models/models.module";

@Module({
  imports: [ModelsModule],
  controllers: [
    CreateProductController,
    FetchRecentProductsController,
    DeleteProductController,
    GetProductByIdController,
    UpdateAvailableProductController,
    EditProductController,
  ],
  providers: [
    PrismaService,
    ProductsRepository,
    CreateProductService,
    FetchRecentProductsService,
    DeleteProductService,
    GetProductByIdService,
    UpdateAvailableProductService,
    EditProductService,
  ],
  exports: [ProductsRepository],
})
export class ProductsModule {}
