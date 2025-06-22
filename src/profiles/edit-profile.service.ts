import { Injectable, NotFoundException } from "@nestjs/common";
import { ProfileRepository } from "./profiles.repository";

interface EditProfileServiceRequest {
  id: string;
  avatarUrl?: string;
}

@Injectable()
export class EditProfileService {
  constructor(private profileRepository: ProfileRepository) {}

  async execute({
    id,
    avatarUrl,
  }: EditProfileServiceRequest): Promise<void> {
    const profile = await this.profileRepository.findById(id);

    if (!profile) {
      throw new NotFoundException("Profile not found.");
    }

    await this.profileRepository.save({
      id,
      avatarUrl,
    });
  }
}
