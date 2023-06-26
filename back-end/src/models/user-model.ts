import {Schema, model} from "mongoose";

export interface User {
    id: string;
    name: string;
    lastName: string;
    address: string;
    email: string;
    password: string;
}

export const userSchema = new Schema<User>(
    {
        name: {type:String, required:true},
        lastName: {type:String, required:true},
        address: {type:String, required:true},
        email: {type:String, required:true, unique:true},
        password: {type:String, required:true},
    },{
        timestamps:true,
        toObject:{
            virtuals:true
        },
        toJSON:{
            virtuals:true
        }
    });

export const UserModel = model<User>("user",userSchema);