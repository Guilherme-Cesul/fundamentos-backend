import { Module } from "@nestjs/common";
import { PrismaService } from "prisma.service";
import { UsersRepository } from "./users.repository";
import { CreateUserController } from "./create-user.controller";
import { CreateUserService } from "./create-user.service";
import { FetchRecentUsersController } from "./fetch-recent-users.controller";
import { FetchRecentUsersService } from "./fetch-recent-users.service";
import { DeleteUserController } from "./delete-user.controller";
import { DeleteUserService } from "./delete-user.service";
import { GetUserByIdController } from "./get-user-by-id.controller";
import { GetUserByIdService } from "./get-user-by-id.service";
import { EditUserController } from "./edit-user.controller";
import { EditUserService } from "./edit-user.service";

@Module({
  controllers: [
    CreateUserController,
    FetchRecentUsersController,
    DeleteUserController,
    GetUserByIdController,
    EditUserController,
  ],
  providers: [
    PrismaService,
    UsersRepository,
    CreateUserService,
    FetchRecentUsersService,
    DeleteUserService,
    GetUserByIdService,
    EditUserService,
  ],
  exports: [UsersRepository],
})
export class UsersModule {}
