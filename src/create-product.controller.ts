import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { z } from "zod";
import { isValidCPF } from "./utils/is-valid-cpf";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";

const createProductBodySchema = z.object({
  name: z.string().min(5).max(30),
  model: z.string().min(5).max(30),
  dateManufacture: z.string().date(),
  year: z.number().gt(4),
  brand: z.string().min(3).max(15),
  email: z.string().email(),
  cpf: z.string().regex(/^\d{11}$/, {
    message: "CPF deve conter exatamente 11 digitos numéricos",
  })
  .refine(isValidCPF, {
    message: "CPF Invalid",
  })
})

const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);

type CreateProductBodySchema = z.infer<typeof createProductBodySchema>;

@Controller('/products')
export class CreateProductController {
    constructor() {}

    @Post()
    @HttpCode(201)
    async handle(@Body(bodyValidationPipe) body: CreateProductBodySchema) {

    }
}