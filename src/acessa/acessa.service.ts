import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../database/data-source';
import { acessa } from '../database/entity/acessa';
import { CreateAcessaDto } from './dto/create-acessa.dto';
import { UpdateAcessaDto } from './dto/update-acessa.dto';
import {v4} from 'uuid'

@Injectable()
export class AcessaService {
  repo=AppDataSource.getRepository(acessa)
  async create(createAcessaDto: CreateAcessaDto) {
    let create = createAcessaDto;
    create.id_acessa = v4();
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: string) {
    return await this.repo.findBy({
      id_acessa:id
    });
  }

  async update(id: string, updateAcessaDto: UpdateAcessaDto) {
    let update=updateAcessaDto;
    update.id_acessa=id;
    return this.repo.save(update)
  }

  async remove(id: string) {
    let remove = await this.repo.findOneBy({
      id_acessa:id
    })
    return this.repo.remove(remove);
  }
}
