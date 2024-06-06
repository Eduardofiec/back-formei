import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { CreateComentarioDto } from 'comentario/dto/create-comentario.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    comentarios: CreateComentarioDto[]; 
    constructor(id_post: string, cod_img: string, curtidas: number, comentarios: CreateComentarioDto[], isliked: boolean) {
        super();
        this.id_post = id_post;
        this.cod_img = cod_img;
        this.curtidas = curtidas;
        this.isliked = isliked;
        this.comentarios = comentarios;
    }
}
