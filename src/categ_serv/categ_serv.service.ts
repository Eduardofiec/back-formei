import { Injectable } from '@nestjs/common';
import { CreateCategServDto } from './dto/create-categ_serv.dto';
import { UpdateCategServDto } from './dto/update-categ_serv.dto';
import {AppDataSource} from '../database/data-source'
import { categ_serv } from '../database/entity/categ_serv';
import {v4} from 'uuid'

@Injectable()
export class CategServService {
  repo=AppDataSource.getRepository(categ_serv);
  async create(createCategServDto: CreateCategServDto) {
    let create = createCategServDto;
    create.id_serv = v4();
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: string) {
    return await this.repo.findBy({
      id_serv:id
    });
  }

  async update(id: string, updateCategServDto: UpdateCategServDto) {
    let update=updateCategServDto;
    update.id_serv=id;
    return this.repo.save(update)
  }

  async remove(id: string) {
    let remove = await this.repo.findOneBy({
      id_serv:id
    })
    return this.repo.remove(remove);
  }
}
