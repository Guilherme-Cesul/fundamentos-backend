import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";


export interface User {
    id:    string;
    email: string;
    createdAt: string | Date | undefined;
    updatedAt: string | Date | null | undefined;
}

interface CreateUserServiceRequest {
    email: string;
}


@Injectable()
export class CreateUserService {
    constructor(private usersRepository: UsersRepository) {}

    async execute({
        email,

    }: CreateUserServiceRequest): Promise<void> {
        const userWithSameName = await this.usersRepository.findByName(email);

        if (userWithSameName) {
            throw new Error ("Product already exists");
        }

        const user = {
            email, 

        };

       await this.usersRepository.create(user);
    }

}