import { HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from '../database/data-source';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ConfSenhaDto, UpdateClienteDto } from './dto/update-cliente.dto';
import { cliente } from '../database/entity/cliente';
import { hash } from 'bcrypt';
import {v4} from 'uuid'
import { HttpException } from '@nestjs/common/exceptions';

@Injectable()
export class ClienteService {
  repo= AppDataSource.getRepository(cliente);
  async create(createClienteDto: CreateClienteDto) {
    let create = createClienteDto;
    const passwordHash = await hash(create.senha, 8)
    create.senha =  passwordHash;
    create.id_cliente= v4()
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: string) {
    return await this.repo.findOneBy({
      id_cliente:id
    });
  }

    confsenha: string;
  async update(id: string, updateClienteDto: UpdateClienteDto, ConfSenhaDto:ConfSenhaDto) {
    let update=updateClienteDto
    update.id_cliente=id;
      if( update.senha === ConfSenhaDto.confsenha){
      const passwordHash = await hash(update.senha, 8)
      update.senha = passwordHash
       return await this.repo.save(update)
    }else{
   

      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  async remove(id: string) {
    let remove = await this.repo.findOneBy({
      id_cliente:id
    })
    return this.repo.remove(remove);
  }
}
