import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

interface CreateUserServiceRequest {
    email: string;
}


@Injectable()
export class CreateUserService {
    constructor(private usersRepository: UsersRepository) {}

    async execute({
        email,

    }: CreateUserServiceRequest): Promise<void> {
        const userWithSameEmail = await this.usersRepository.findByEmail(email);

        if (userWithSameEmail) {
            throw new BadRequestException("User with this email already exists.");
        }

        const user = {
            email, 

        };

       await this.usersRepository.create(user);
    }

}