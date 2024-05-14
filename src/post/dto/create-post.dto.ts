import { 
    Length
} from 'class-validator';

export class CreatePostDto {
    id_post: string
    cod_img: string
    curtidas: number
    isliked:boolean
    constructor(id_post: string,cod_img: string,curtidas: number, comentarios: string, isliked:boolean){
        this.id_post=id_post;
        this.cod_img=cod_img;
        this.curtidas=curtidas;
        this.isliked=isliked;
    }
}
