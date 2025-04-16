import { Controller, Body, Post, HttpCode, Get, Delete, Param, Put, Patch } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from './pipes/zod-validation-pipe';

function isValidCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += +cpf.charAt(i) * (10 - i);
  let rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== +cpf.charAt(9)) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += +cpf.charAt(i) * (11 - i);
  rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  return rev === +cpf.charAt(10);
}

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

const updateProductBodySchema = z.object({
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

const updateBodyValidationPipe = new ZodValidationPipe(updateProductBodySchema);

type UpdateProductBodySchema = z.infer<typeof updateProductBodySchema>;

const updateStatusProductBodySchema = z.object({
  status: z.string().max(10),

})

const updateStatusBodyValidationPipe = new ZodValidationPipe(updateStatusProductBodySchema);

type UpdateStatusProductBodySchema = z.infer<typeof updateStatusProductBodySchema>;

@Controller("/products")
export class AppController {
  constructor() {}

  @Post()
  @HttpCode(201)
  create(@Body(bodyValidationPipe) body: CreateProductBodySchema) {
   const { brand, cpf, dateManufacture, email, model, name, year } = body;

  };

  @Get()
  @HttpCode(200)
  findAll(): string {
    return "Produtos"
  }

  @Get(':id')
  @HttpCode(200)
  findById(@Param('id') id: string) {

  }
  
  @Put(':id')
  @HttpCode(204)
  update(@Param('id') id: string, @Body(updateBodyValidationPipe) body: UpdateProductBodySchema) {
    
  }

  @Patch(':id/status')
  @HttpCode(204)
  updateStatus(@Param('id') id: string, @Body(updateStatusBodyValidationPipe) body: UpdateStatusProductBodySchema) {

  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string) {

  }
}


