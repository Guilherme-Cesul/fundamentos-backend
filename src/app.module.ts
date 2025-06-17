import { Module } from "@nestjs/common";
import { CreateProductController } from "./product/create-product.controller";
import { PrismaService } from "prisma.service";
import { CreateProductService } from "./product/create-product.service";
import { ProductsRepository } from "./product/products.repository";
import { CreateModelController } from "./model/create-model.controller";
import { CreateModelService } from "./model/create-model.service";
import { ModelsRepository } from "./model/models.repository";
import { FetchRecentProductsController } from "./product/fetch-recent-products.controller";
import { FetchRecentProductsService } from "./product/fetch-recent-products.service";
import { FetchRecentModelsController } from "./model/fetch-recent-models.controller";
import { FetchRecentModelsService } from "./model/fetch-recent-models.service";
import { DeleteProductService } from "./product/delete-product.service";
import { DeleteProductController } from "./product/delete-product.controller";
import { GetProductByIdController } from "./product/get-product-by-id.controller";
import { GetProductByIdService } from "./product/get-product-by-id.service";
import { CreateUserController } from "./user/create-user.controller";
import { CreateUserService } from "./user/create-user.service";
import { UsersRepository } from "./user/users.repository";
import { FetchRecentUsersController } from "./user/fetch-recent-users.controller";
import { DeleteUserService } from "./user/delete-user.service";
import { FetchRecentUsersService } from "./user/fetch-recent-users.service";
import { DeleteUserController } from "./user/delete-user.controller";

@Module({
  imports: [],
  controllers: [
    CreateProductController,
    CreateModelController,
    FetchRecentProductsController,
    FetchRecentModelsController,
    DeleteProductController,
    GetProductByIdController,
    CreateUserController,
    FetchRecentUsersController,
    DeleteUserController
  ],
  providers: [
    PrismaService,
    CreateProductService,
    ProductsRepository,
    CreateModelService,
    ModelsRepository,
    FetchRecentProductsService,
    FetchRecentModelsService,
    DeleteProductService,
    GetProductByIdService,
    CreateUserService,
    FetchRecentUsersService,
    DeleteUserService,
    UsersRepository,
  ],
})
export class AppModule {}
