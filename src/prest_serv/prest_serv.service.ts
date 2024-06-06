import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestServDto } from './dto/create-prest_serv.dto';
import { ConfSenhaDto, UpdatePrestServDto } from './dto/update-prest_serv.dto';
import { AppDataSource } from '../database/data-source';
import { prest_serv} from '../database/entity/prest_serv';
import { hash } from 'bcrypt';
import {v4} from "uuid"
import { plainToClass } from 'class-transformer';


@Injectable()
export class PrestServService {

  repo=AppDataSource.getRepository(prest_serv);

  async create(createPrestServDto: CreatePrestServDto) {
    //aqui está sendo feito uma conversão de tipo DTO para um DeepPartial com o 'PlainToClass', no caso seria o que a função 'save' espera para funcionar
    let create=plainToClass(prest_serv,createPrestServDto);
    const passwordHash = await hash(create.senha, 8)
    create.senha =  passwordHash;
    create.id_prest= v4()
    return await this.repo.save(create)
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: string) {
    return await this.repo.findOneBy({
      id_prest:id
    });
  }

  async update(id: string, updatePrestServDto: UpdatePrestServDto, ConfSenhaDto: ConfSenhaDto) {
    let update = plainToClass(prest_serv, updatePrestServDto);
    update.id_prest = id;
    if (update.senha === ConfSenhaDto.confsenha) {
        const passwordHash = await hash(update.senha, 8)
        update.senha = passwordHash;
        return await this.repo.save(update);
    } else {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
}

  async remove(id: string) {
    let remove=await this.repo.findOneBy({
      id_prest:id
    });
    return this.repo.remove(remove)
  }
}
