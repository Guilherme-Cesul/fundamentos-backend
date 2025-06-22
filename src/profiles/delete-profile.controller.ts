import { Controller, Delete, HttpCode, Param } from "@nestjs/common";
import { DeleteProfileService } from "./delete-profile.service";


@Controller("/profiles/:id")
export class DeleteProfileController {
  constructor(private deleteProfile: DeleteProfileService) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param("id") id: string) {
    await this.deleteProfile.execute({
      id,
    });
  }
}
