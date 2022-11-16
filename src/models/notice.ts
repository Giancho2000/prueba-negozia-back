import { Schema, model, Document } from 'mongoose';
//user: prueba 
//password:12345

export interface INotice extends Document {
    title: string;
    text: string;
    tags: string;
    type: string;
    img?: {
        data: Buffer,
        contentType: string;
    };
    title2?: string
};

const NoticeSchema = new Schema({
    title:{
        type: String,
        required: [true, 'The title is required!']
    },
    text:{
        type: String,
        required: [true, 'Write the notice!']
    },
    type:{
        type: String,
        required: [true, 'Choose a type!']
    },
    tags:{
        type: String,
    }
    
});

export default model<INotice>('Notice', NoticeSchema);