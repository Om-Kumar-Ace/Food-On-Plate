import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://Food:onplate@cluster0.gbtha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("DB Connected")).catch((err) => console.log(err)) ;
}