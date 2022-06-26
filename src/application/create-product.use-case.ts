import { Product } from "../domain/product.entity";
import { ProductRepositoryInterface } from "../domain/product.repository";


export class CreateProductUseCase {
    constructor(private productRepo: ProductRepositoryInterface){}

    async execute(input: CreateProductInput): Promise<CreateProductOutput>{
        const product = new Product(input);
        await this.productRepo.insert(product);
        return product.toJson();
    }

}

type CreateProductInput = {
    category: string;
    name: string;
    model: string;
    year: number;
    new: boolean;
    price?: number;
}

type CreateProductOutput = {
    id: string;
    category: string;
    name: string;
    model: string;
    year: number;
    new: boolean;
    price?: number;
}