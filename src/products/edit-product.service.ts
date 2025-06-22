import { Injectable, NotFoundException } from "@nestjs/common";
import { ModelsRepository } from "src/models/models.repository";
import { ProductsRepository } from "./products.repository";
import { Category } from "@prisma/client";

interface EditProductServiceRequest {
  id: string;
  name: string;
  description?: string;
  price: number;
  inStock: number;
  isAvailable: boolean;
  category: Category;
  tags: string[];
  modelsIds?: string[];
}

@Injectable()
export class EditProductService {
  constructor(
    private productsRepository: ProductsRepository,
    private modelsRepository: ModelsRepository
  ) {}

  async execute({
    id,
    name,
    description,
    price,
    inStock,
    isAvailable,
    category,
    tags,
    modelsIds,
  }: EditProductServiceRequest): Promise<void> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    await this.productsRepository.save({
      id,
      name,
      description,
      price,
      inStock,
      isAvailable,
      category,
      tags,
      modelsIds, 
    });
  }
}
