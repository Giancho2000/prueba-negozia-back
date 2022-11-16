import { NormalNoticeStrategy } from "../interface/normalNotice";
import { NoticeResponse } from "../interface/notice";


export class NoticeNormal implements NormalNoticeStrategy{
    constructor( 
        public title3: string
    ) {}

    execute(title: string, text: string, tags: string): NoticeResponse {
        
        console.log(`Se puede crear la noticia Normal ${tags},${title}, ${text}`);
        return { isSuccess: true }
    }
}