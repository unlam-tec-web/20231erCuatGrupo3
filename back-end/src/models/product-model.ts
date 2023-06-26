import {Schema, model} from "mongoose";

export interface Product{
    id: string
    type: string
    category: string
    name: string
    details: string
    description: string
    brand: string
    price: number
    img: string
}

export const productSchema = new Schema<Product>(
    {
        type: {type:String, required:true},
        category: {type:String, required:true},
        name: {type:String, required:true},
        details: {type:String, required:true},
        description: {type:String, required:true},
        brand: {type:String, required:true},
        price: {type:Number, required:true},
        img: {type:String, required:true},
    },{
        timestamps:true,
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        }
    }
);

export const ProductModel = model<Product>("product",productSchema)


