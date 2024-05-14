import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'database/data-source';
import { comentario } from 'database/entity/comentario';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import {v4} from 'uuid'
import { cliente } from 'database/entity/cliente';

@Injectable()
export class ComentarioService {
  repo = AppDataSource.getRepository(comentario);

  async create(createComentarioDto: CreateComentarioDto) {
    let create = createComentarioDto;
    create.id_comentario = v4();
    return await this.repo.save(create);
  }

  findAll() {
    return this.repo.createQueryBuilder('comentario')
    .leftJoinAndSelect('comentario.cliente', 'cliente')
    .select(['comentario.id_comentario', 'comentario.conteudo', 'cliente.nome'])
    .getRawMany();
  }

  findOne(id: string) {
    return this.repo.createQueryBuilder('comentario')
    .leftJoinAndSelect('comentario.cliente', 'cliente')
    .select(['comentario.id_comentario', 'comentario.conteudo', 'cliente.nome'])
    .where('comentario.id_comentario = :id', { id })
    .getRawMany();
  }

  update(id: string, updateComentarioDto: UpdateComentarioDto) {
    let update = updateComentarioDto
     update.id_comentario = id
    return this.repo.save(update);
  }

 async remove(id: string) {
    let delet= await this.repo.findBy({
      id_comentario:id
    })
    return this.repo.remove(delet);
  }
}
