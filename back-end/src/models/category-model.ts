import {Schema, model} from "mongoose";

export interface Category{
    id: string
    type: string
    img: string
}

export const categorySchema = new Schema<Category>(
    {
        type: {type:String, required:true},
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

export const CategoryModel = model<Category>("category",categorySchema)