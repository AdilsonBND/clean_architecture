import { ProductInMemoryRepo } from "../infra/product-in-memory-repo/product-in-memory-repo"
import { CreateProductUseCase } from "./create-product.use-case";
import {ListAllProductsUseCase} from './list-all-products.use-case'

describe('teste createUseCase', ()=>{
    test('criar produto com use case', async()=>{
        const repository = new ProductInMemoryRepo();
        const createUseCase = new CreateProductUseCase(repository);
        const out = await createUseCase.execute({
            category: 'celular',
            name: 'iphone',
            model: 'SE, 64GB',
            year: 2017,
            new: false,
            price: 3000,
        });
        console.log(out);
        
        const find = new ListAllProductsUseCase(repository);
        const FindAll = await find.execute();
        console.log(FindAll);
        
        
    })
})