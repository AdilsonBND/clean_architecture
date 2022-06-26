import { ProductRepositoryInterface } from "../domain/product.repository";


export class ListAllProductsUseCase {
    constructor(private productRepo: ProductRepositoryInterface){}

    async execute(): Promise<CreateProductOutput>{

        const products = await this.productRepo.findAll();
        return products.map(r => r.toJson());


    }
}
type CreateProductOutput = {
    id: string;
    category: string;
    name: string;
    model: string;
    year: number;
    new: boolean;
    price?: number;
}[];