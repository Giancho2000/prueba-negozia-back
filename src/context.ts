import { Notice, NoticeResponse } from './interface/notice';

export class Notices {
    private contexts?: Notice;

    public setStrategy( context: Notice) {
        this.contexts = context;
    }

    public execute(title: string,
        text: string,
        tags: string): NoticeResponse {
            if (!this.contexts) {
                throw new Error('Contexto no pudo ser encontrado')
            }

            return this.contexts.execute(title,tags,text);
        }
}