import { InferSchemaType, model, Schema } from "mongoose";

//User Schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, select: false },
    password: { type: String, required: true, select: false },
});

//Infer the schema type from Schema instance
type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);