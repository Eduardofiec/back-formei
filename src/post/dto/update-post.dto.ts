import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    constructor(id_post: string,cod_img: string,curtidas: number, comentarios: string, isliked:boolean){
        super();
        this.id_post=id_post;
        this.cod_img=cod_img;
        this.curtidas=curtidas;
        this.isliked=isliked;
    }
}
