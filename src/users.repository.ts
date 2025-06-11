import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "prisma.service";

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findByName(email: string): Promise<Prisma.UserUncheckedCreateInput | null> {
    const user = this.prisma.user.findUnique({
      where: {
        email,
      }
    });

    return user;
  }

  async save(data: Prisma.UserUncheckedCreateInput): Promise<void> {
    await Promise.all([
      this.prisma.product.update({
        where: {
          id: data.id?.toString(),
        },
        data,
      }),
    ]);
  }

  async create(user: Prisma.UserUncheckedCreateInput): Promise<Prisma.UserUncheckedCreateInput> {
    return await this.prisma.user.create({
      data: user,
    });
  }

}