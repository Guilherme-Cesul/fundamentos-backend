import { Module } from "@nestjs/common";
import { PrismaService } from "prisma.service";
import { OrdersRepository } from "./orders.repository";
import { CreateOrderController } from "./create-orders.controller";
import { CreateOrderService } from "./create-orders.service";
import { GetOrderByIdController } from "./get-order-by-id.controller";
import { GetOrderByIdService } from "./get-order-by-id.service";
import { GetOrderByUserIdController } from "./get-order-by-user-id.controller";
import { GetOrderByUserIdService } from "./get-order-by-user-id.service";
import { ProductsModule } from "../products/products.module";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [ProductsModule, UsersModule],
  controllers: [
    CreateOrderController,
    GetOrderByIdController,
    GetOrderByUserIdController,
  ],
  providers: [
    PrismaService,
    OrdersRepository,
    CreateOrderService,
    GetOrderByIdService,
    GetOrderByUserIdService,
  ],
})
export class OrdersModule {}
