import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            minLength: 1,
            maxLength: 30
        },
        password: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 30
        },
        email: {
            type: String,
            required: true,
            minLength: 1
        },
        details: {
            type: Array
        }
    },
    {
        timestamps: true
    }
);
export const Users = mongoose.model("users", userSchema);