import { Product, ProductProps } from "./product.entity"

describe('Testes entity', () => {
    test('teste novo produto', () =>{
        const especif : ProductProps = {
            category: 'celular',
            name: 'iphone',
            model: 'SE, 64GB',
            year: 2017,
            new: false,
            price: 3000,
        }
        const product = new Product(especif);
        expect(product.props).toStrictEqual({
            ...especif, 
        });
    })
    test('Teste Updates', () =>{
        const especif : ProductProps = {
            category: 'celular',
            name: 'iphone',
            model: 'SE, 64GB',
            year: 2017,
            new: false,
            price: 3000,
        }
        const product1 = new Product(especif);
        const altModel = ('12, 128GB');
        product1.updateModel(altModel);
        //console.log(product1);
        expect(product1.model).toBe(altModel);
    })
})