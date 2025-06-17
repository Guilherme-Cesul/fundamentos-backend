import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

export interface User {
  id: string;
  email: string;
  createdAt: string | Date | undefined;
  updatedAt: string | Date | null | undefined;
}

type FetchRecentUsersServiceResponse = {
  users: User[];
};

@Injectable()
export class FetchRecentUsersService {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<FetchRecentUsersServiceResponse> {
    const users = await this.usersRepository.findManyRecent();

    const newUsers: User[] = [];

    if (!users) {
      throw new BadRequestException("Users not found");
    }

    for (const user of users) {
      newUsers.push({
        id: user.id?.toString() || "",
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    }

    return {
      users: newUsers,
    };
  }
}
