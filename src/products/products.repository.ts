import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "prisma.service";

@Injectable()
export class ProductsRepository {
  constructor(private prisma: PrismaService) {}

  async findManyRecent(): Promise<Prisma.ProductUncheckedCreateInput[] | null> {
    const products = this.prisma.product.findMany();

    return products;
  }

  async findById(
    id: string
  ): Promise<Prisma.ProductUncheckedCreateInput | null> {
    const product = this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  async findByName(
    name: string
  ): Promise<Prisma.ProductUncheckedCreateInput | null> {
    const product = this.prisma.product.findUnique({
      where: {
        name,
      },
    });

    return product;
  }

async save(data: Prisma.ProductUncheckedCreateInput & { modelsIds?: string[] }): Promise<void> {
  const { modelsIds, ...rest } = data;

  await this.prisma.product.update({
    where: {
      id: rest.id!.toString(),
    },
    data: {
      ...rest,
      ...(modelsIds && {
        models: {
          set: modelsIds.map((id) => ({ id })),
        },
      }),
    },
  });
}

  async create(product: Prisma.ProductUncheckedCreateInput): Promise<Prisma.ProductUncheckedCreateInput> {
    return await this.prisma.product.create({
      data: product,
    });
  }

  async delete(product: Prisma.ProductUncheckedCreateInput): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id: product.id?.toString(),
      },
    });
  }
}
