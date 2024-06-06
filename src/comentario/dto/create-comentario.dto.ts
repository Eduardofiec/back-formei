export class CreateComentarioDto {
id_comentario:string
id_cliente:string
id_post:string
conteudo:string

constructor(id_comentario:string,id_cliente:string,conteudo:string,id_post:string){
    this.id_cliente=id_cliente;
    this.conteudo = conteudo;
    this.id_comentario =id_comentario;
    this.id_post=id_post;
}
}
