import { Module } from "@nestjs/common";
import { PrismaService } from "prisma.service";
import { ModelsRepository } from "./models.repository";
import { CreateModelController } from "./create-model.controller";
import { CreateModelService } from "./create-model.service";
import { FetchRecentModelsController } from "./fetch-recent-models.controller";
import { FetchRecentModelsService } from "./fetch-recent-models.service";
import { DeleteModelController } from "./delete-model.controller";
import { DeleteModelService } from "./delete-model.service";
import { GetModelByIdController } from "./get-model-by-id.controller";
import { GetModelByIdService } from "./get-model-by-id.service";
import { EditModelController } from "./edit-model.controller";
import { EditModelService } from "./edit-model.service";

@Module({
  controllers: [
    CreateModelController,
    FetchRecentModelsController,
    DeleteModelController,
    GetModelByIdController,
    EditModelController,
  ],
  providers: [
    PrismaService,
    ModelsRepository,
    CreateModelService,
    FetchRecentModelsService,
    DeleteModelService,
    GetModelByIdService,
    EditModelService,
  ],
  exports: [ModelsRepository],
})
export class ModelsModule {}
