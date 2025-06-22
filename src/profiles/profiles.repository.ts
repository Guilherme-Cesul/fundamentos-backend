import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "prisma.service";

@Injectable()
export class ProfileRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ProfileUncheckedCreateInput): Promise<void> {
    await this.prisma.profile.create({
      data,
    });
  }

  async findById(id: string): Promise<any> {
    return await this.prisma.profile.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async save(data: Prisma.ProfileUpdateInput): Promise<void> {
    await Promise.all([
      this.prisma.profile.update({
        where: {
          id: data.id?.toString(),
        },
        data,
      }),
    ]);
  }
}
