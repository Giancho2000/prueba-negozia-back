//import dotenv from 'dotenv';
//import noticesRouter from './routes/notices';
import { Notices } from './context';
import Server from './models/server';
import { NoticeNormal } from './strategys/normalNotice';

const server = new Server();

server.listen();

const notice = new Notices();
    
let title = 'Nueva noticia',
    text = 'Estamos probando la funcionalidad',
    tags = '#siSePudo',
    type = 'slide',
    title3 = 'hecho';

if (type === 'normal') {
        notice.setStrategy(
            new NoticeNormal(title3)
        );
}

if (type === 'slide') {
        notice.setStrategy(
            new NoticeNormal(title)
        );
}

notice.execute(title, text, tags);
