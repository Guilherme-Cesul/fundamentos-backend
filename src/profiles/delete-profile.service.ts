import { BadRequestException, Injectable } from "@nestjs/common";
import { ProfileRepository } from "./profiles.repository";


interface DeleteProfileServiceRequest {
  id: string;
  avatarUrl?: string;
}

@Injectable()
export class DeleteProfileService {
  constructor(private profileRepository: ProfileRepository) {}

  async execute({ id }: DeleteProfileServiceRequest): Promise<void> {
    const profile = await this.profileRepository.findById(id);

    if (!profile) {
      throw new BadRequestException("Profile not found");
    }

    await this.profileRepository.delete(profile);
  }
}
