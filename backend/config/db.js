import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://adarsh8:MF047ZU4mv0IOwnS@cluster0.3he2kah.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

