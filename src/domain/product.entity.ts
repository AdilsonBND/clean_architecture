import crypto from 'crypto';

//especificações do produto
export type ProductProps = {
    category: string;
    name: string;
    model: string;
    year: number;
    new: boolean;
    price?: number;
}
// metodo construtor
export class Product {
    public readonly id: string;
    public props: Required<ProductProps>;
    constructor(props: ProductProps, id?: string){
        this.id = id || crypto.randomUUID();
        this.props = {
            ...props,
            price: props.price || NaN
        }
    }
// getters e setters
    get category(){
        return this.props.category
    }
    private set category(value: string){
        this.props.category = value;
    }
    get name(){
        return this.props.name;
    }
    private set name(value: string){
        this.props.name = value
    }
    get model(){
        return this.props.model;
    }
    private set model(value: string){
        this.props.model = value;
    }
    get year(){
        return this.props.year;
    }
    private set year(value: number){
        this.props.year = value;
    }
    get new(){
        return this.props.new;
    }
    private set new(value: boolean){
        this.props.new = value;
    }
    get price(){
        return this.props.price;
    }
    private set price(value: number){
        this.props.price = value;        
    }
//metodos e regras

    updateCategory(value: string){
        this.category = value;
    }

    updateName (value: string){
        this.name = value;
    }

    updateModel(value: string){
        this.model = value;
    }

    updateYear(value: number){
        this.year = value;
    }

    updateNew (value: boolean){
        this.new = value;
    }

    updatePrice (value: number){
        this.price = value;
    }

// metodo para retornar as props em JSON

    toJson(){
        return{
            id: this.id,
            ...this.props
        }
    }

}
