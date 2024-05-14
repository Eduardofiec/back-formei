import { PartialType } from '@nestjs/mapped-types';
import { CreateComentarioDto } from './create-comentario.dto';

export class UpdateComentarioDto extends PartialType(CreateComentarioDto) {
    constructor(conteudo:string){
        super()
       this.conteudo= conteudo
    }
}
