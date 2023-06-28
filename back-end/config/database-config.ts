import {connect, Connection, ConnectOptions} from "mongoose";

const URI = process.env.MONGO_URI;
export const dbConnect = () => {
    connect(URI!, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    } as ConnectOptions).then(
        () => console.log("Connected Successfully"),
        (error) => console.log(error)
    )
}