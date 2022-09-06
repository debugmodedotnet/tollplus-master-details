import { IProduct } from "./product.entity";

export interface IProductDetail{
    Product : IProduct,
    Price : number,
    Color : string; 
    Distributor : string
}