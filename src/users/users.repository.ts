import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "prisma.service";

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(
    email: string
  ): Promise<Prisma.UserUncheckedCreateInput | null> {
    const user = this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string): Promise<any> {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
      },
    });
  }

async save(data: Prisma.UserUncheckedCreateInput): Promise<void> {
  const { profile, ...userData } = data; 

  await this.prisma.user.update({
    where: { id: userData.id?.toString() },
    data: userData,
  });
}

  async create(
    user: Prisma.UserUncheckedCreateInput
  ): Promise<Prisma.UserUncheckedCreateInput> {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async findManyRecent(): Promise<Prisma.UserUncheckedCreateInput[] | null> {
    const users = this.prisma.user.findMany();

    return users;
  }

  async delete(user: Prisma.UserUncheckedCreateInput): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: user.id?.toString(),
      },
    });
  }
}
