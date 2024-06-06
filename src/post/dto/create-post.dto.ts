import { Length } from 'class-validator';
import { CreateComentarioDto } from 'comentario/dto/create-comentario.dto';

export class CreatePostDto {
    id_post: string;
    cod_img: string;
    curtidas: number;
    isliked: boolean;
    id_serv: string;
    id_prest:string;
    categ_serv: {};
    comentarios: CreateComentarioDto[]; 
    constructor(id_post: string, cod_img: string, curtidas: number, comentarios: CreateComentarioDto[], isliked: boolean, categ_serv: {},  id_serv: string, id_prest:string) {
        this.id_post = id_post;
        this.cod_img = cod_img;
        this.curtidas = curtidas;
        this.isliked = isliked;
        this.categ_serv = categ_serv;
        this.comentarios = comentarios; 
        this.id_serv = id_serv;
        this.id_prest = id_prest;
    }
}
