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
import { UpdateAvailableProductController } from "./products/update-available-product.controller";
import { UpdateAvailableProductService } from "./products/update-available-product.service";
import { EditUserService } from "./users/edit-user.service";
import { EditUserController } from "./users/edit-user.controller";
import { EditProductController } from "./products/edit-product.controller";
import { EditProductService } from "./products/edit-product.service";
import { ProfileRepository } from "./profiles/profiles.repository";
import { CreateProfileController } from "./profiles/create-profile.controller";
import { DeleteModelController } from "./models/delete-model.controller";
import { GetModelByIdController } from "./models/get-model-by-id.controller";
import { EditModelController } from "./models/edit-model.controller";
import { CreateProfileService } from "./profiles/create-profile.service";
import { GetModelByIdService } from "./models/get-model-by-id.service";
import { DeleteModelService } from "./models/delete-model.service";
import { EditModelService } from "./models/edit-model.service";
import { GetProfileByIdController } from "./profiles/get-profile-by-id.controller";
import { GetProfileByIdService } from "./profiles/get-profile-by-id.service";
import { EditProfileService } from "./profiles/edit-profile.service";
import { EditProfileController } from "./profiles/edit-profile.controller";
import { DeleteProfileController } from "./profiles/delete-profile.controller";
import { DeleteProfileService } from "./profiles/delete-profile.service";
import { OrdersRepository } from "./orders/orders.repository";
import { CreateOrderService } from "./orders/create-orders.service";
import { CreateOrderController } from "./orders/create-orders.controller";

@Module({
  imports: [],
  controllers: [
    CreateProductController,
    CreateModelController,
    CreateUserController,
    CreateOrderController,
    CreateProfileController,
    FetchRecentProductsController,
    FetchRecentModelsController,
    FetchRecentUsersController,
    GetProductByIdController,
    GetModelByIdController,
    GetUserByIdController,
    GetProfileByIdController,
    DeleteProductController,
    DeleteModelController,
    DeleteUserController,
    DeleteProfileController,
    UpdateAvailableProductController,
    EditProductController,
    EditModelController,
    EditUserController,
    EditProfileController,
  ],
  providers: [
    PrismaService,
    ProductsRepository,
    ModelsRepository,
    UsersRepository,
    ProfileRepository,
    OrdersRepository,
    CreateProductService,
    CreateModelService,
    CreateUserService,
    CreateProfileService,
    CreateOrderService,
    FetchRecentProductsService,
    FetchRecentModelsService,
    FetchRecentUsersService,
    GetProductByIdService,
    GetModelByIdService,
    GetUserByIdService,
    GetProfileByIdService,
    DeleteProductService,
    DeleteModelService,
    DeleteUserService,
    DeleteProfileService,
    UpdateAvailableProductService,
    EditProductService,
    EditModelService,
    EditUserService,
    EditProfileService,
  ],
})
export class AppModule {}
