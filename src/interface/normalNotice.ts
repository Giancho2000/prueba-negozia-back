import { Notice } from "./notice";

export interface INoticeNormal {
    title: string,
    text: string,
    tags: string,   
}

export interface NormalNoticeStrategy extends Notice {
    title3: string;
}