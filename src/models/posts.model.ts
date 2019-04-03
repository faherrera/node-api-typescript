import mongoose, { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    }
});

export default model<any>('Post',PostSchema);