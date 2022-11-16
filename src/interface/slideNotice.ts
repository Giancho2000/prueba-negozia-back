import { Notice } from "./notice";

export interface SlideshowNoticeStrategy extends Notice {
    img: File;
    title2: string;
}