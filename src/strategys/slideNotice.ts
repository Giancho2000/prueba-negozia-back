import { NoticeResponse } from "../interface/notice";
import { SlideshowNoticeStrategy } from "../interface/slideNotice";


export class SlideShowNotice implements SlideshowNoticeStrategy {
    constructor (
        public img: File,
        public title2: string
    ) {}

    execute(title: string, text: string, tags: string): NoticeResponse {
        
        console.log(`Todo marcha bien, ${title}, ${this.title2}`);
        return{ isSuccess:true }
    }
}