import Notice, { INotice } from '../models/notice';
import { ObjectID } from 'mongodb';

// Creating a new notice
const newNotice = async( notice: INotice) => {
    try {
        await notice.save();
        return notice;
    } catch (error) {
        throw new Error(`${error}`);
    }

}

// Getting all notices
const getNotices = async() => {
    try {
        return await Notice.find();
    } catch (error) {
        throw new Error( `${error}` );
    }
}

export {
    newNotice,
    getNotices
}
