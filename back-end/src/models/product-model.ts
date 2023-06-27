const mongoose = require("mongoose");

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

export const productSchema = mongoose.Schema(
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

export const ProductModel =new mongoose.model("product",productSchema)


