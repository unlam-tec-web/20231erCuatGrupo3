const mongoose = require("mongoose");

export interface Category{
    id: string
    type: string
    img: string
}

export const categorySchema =mongoose.Schema(
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

export const CategoryModel = new mongoose.model("category",categorySchema)