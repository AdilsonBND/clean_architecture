import { Product } from "../../domain/product.entity";
import { ProductRepositoryInterface } from "../../domain/product.repository";


export class ProductInMemoryRepo implements ProductRepositoryInterface{
    items: Product[] = [];
    async insert(product: Product): Promise<void> {
        this.items.push(product);
    }
    async findAll(): Promise<Product[]> {
        return this.items;
    }
}