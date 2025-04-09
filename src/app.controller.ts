import { Controller, Body, Post } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from './pipes/zod-validation-pipe';

const createProductBodySchema = z.object({
  name: z.string().min(5).max(30),
  model: z.string().min(5).max(30),
  dateManufacture: z.string().date(),
  year: z.number().gt(4),
  brand: z.string().min(3).max(15),
  email: z.string().email(),
  cpf: z.string().regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/),
})

const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);

type CreateProductBodySchema = z.infer<typeof createProductBodySchema>;

@Controller("/products")
export class AppController {
  constructor() {}

  @Post()
  create(@Body(bodyValidationPipe) body: CreateProductBodySchema): string {
    return "create";
  }
}
