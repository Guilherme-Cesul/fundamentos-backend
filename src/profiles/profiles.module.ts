import { Module } from "@nestjs/common";
import { PrismaService } from "prisma.service";
import { ProfileRepository } from "./profiles.repository";
import { CreateProfileController } from "./create-profile.controller";
import { CreateProfileService } from "./create-profile.service";
import { DeleteProfileController } from "./delete-profile.controller";
import { DeleteProfileService } from "./delete-profile.service";
import { GetProfileByIdController } from "./get-profile-by-id.controller";
import { GetProfileByIdService } from "./get-profile-by-id.service";
import { EditProfileController } from "./edit-profile.controller";
import { EditProfileService } from "./edit-profile.service";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [UsersModule],
  controllers: [
    CreateProfileController,
    DeleteProfileController,
    GetProfileByIdController,
    EditProfileController,
  ],
  providers: [
    PrismaService,
    ProfileRepository,
    CreateProfileService,
    DeleteProfileService,
    GetProfileByIdService,
    EditProfileService,
  ],
  exports: [ProfileRepository],
})
export class ProfilesModule {}
