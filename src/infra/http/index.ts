import { ProductInMemoryRepo } from "../product-in-memory-repo/product-in-memory-repo";
import express, {Express, Request, Response} from "express";
import { ListAllProductsUseCase } from "../../application/list-all-products.use-case";
import { CreateProductUseCase } from "../../application/create-product.use-case";


const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const productRepo = new ProductInMemoryRepo();

app.get('/', async (_req: Request, res: Response) =>{
    const listAllProductsUseCase = new ListAllProductsUseCase(productRepo);
    const output = await listAllProductsUseCase.execute();
    res.json(output);
})

app.post('/', async (req: Request, res: Response) =>{
    const createProductUseCase = new CreateProductUseCase(productRepo);
    const output = await createProductUseCase.execute(req.body);
    res.status(201).json(output);
});

app.listen(port, () =>{
    console.log(`Server utilizando porta: ${port}`);
})
