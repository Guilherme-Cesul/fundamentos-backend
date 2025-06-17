import { Module } from "@nestjs/common";
import { CreateProductController } from "./products/create-product.controller";
import { PrismaService } from "prisma.service";
import { CreateProductService } from "./products/create-product.service";
import { ProductsRepository } from "./products/products.repository";
import { CreateModelController } from "./models/create-model.controller";
import { CreateModelService } from "./models/create-model.service";
import { ModelsRepository } from "./models/models.repository";
import { FetchRecentProductsController } from "./products/fetch-recent-products.controller";
import { FetchRecentProductsService } from "./products/fetch-recent-products.service";
import { FetchRecentModelsController } from "./models/fetch-recent-models.controller";
import { FetchRecentModelsService } from "./models/fetch-recent-models.service";
import { DeleteProductService } from "./products/delete-product.service";
import { DeleteProductController } from "./products/delete-product.controller";
import { GetProductByIdController } from "./products/get-product-by-id.controller";
import { GetProductByIdService } from "./products/get-product-by-id.service";
import { CreateUserController } from "./users/create-user.controller";
import { CreateUserService } from "./users/create-user.service";
import { UsersRepository } from "./users/users.repository";
import { FetchRecentUsersController } from "./users/fetch-recent-users.controller";
import { DeleteUserService } from "./users/delete-user.service";
import { FetchRecentUsersService } from "./users/fetch-recent-users.service";
import { DeleteUserController } from "./users/delete-user.controller";
import { GetUserByIdService } from "./users/get-user-by-id.service";
import { GetUserByIdController } from "./users/get-user-by-id.controller";

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
    GetUserByIdController,
    DeleteUserController,
  ],
  providers: [
    PrismaService,
    ModelsRepository,
    UsersRepository,
    ProductsRepository,
    CreateProductService,
    CreateModelService,
    FetchRecentProductsService,
    FetchRecentModelsService,
    DeleteProductService,
    GetProductByIdService,
    CreateUserService,
    FetchRecentUsersService,
    GetUserByIdService,
    DeleteUserService,
  ],
})
export class AppModule {}
