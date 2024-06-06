import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AppDataSource } from '../database/data-source';
import { post } from '../database/entity/post';
import {v4} from 'uuid'
import { plainToClass } from 'class-transformer';

@Injectable()
export class PostService {
  repo=AppDataSource.getRepository(post)
  async create(createPostDto: CreatePostDto) {
    let create = plainToClass(post,createPostDto);
    create.id_post = v4();
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: string) {
    return await this.repo.findBy({
      id_post:id
    });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    let update=plainToClass(post,updatePostDto);
    update.id_post=id;
    return this.repo.save(update)
  }

  async remove(id: string) {
    let remove = await this.repo.findOneBy({
      id_post:id
    })
    return await this.repo.remove(remove);
  }
}
