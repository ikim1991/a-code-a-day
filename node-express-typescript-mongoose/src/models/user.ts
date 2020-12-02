import { Document, Schema } from "mongoose";
const mongoose = require('mongoose');

export interface UserI extends Document{
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

const UserSchema: Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;