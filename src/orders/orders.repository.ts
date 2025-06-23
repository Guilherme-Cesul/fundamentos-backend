import { Injectable } from "@nestjs/common";
import { Prisma, Order } from "@prisma/client";
import { PrismaService } from "prisma.service";

@Injectable()
export class OrdersRepository {
  constructor(private prisma: PrismaService) {}

  async create(order: Prisma.OrderCreateInput): Promise<void> {
    await this.prisma.order.create({ data: order });
  }
}
