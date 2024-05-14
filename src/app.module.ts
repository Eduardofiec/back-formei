import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { PrestServModule } from './prest_serv/prest_serv.module';
import { EnderecoModule } from './endereco/endereco.module';
import { PostModule } from './post/post.module';
import { AcessaModule } from './acessa/acessa.module';
import { CategServModule } from './categ_serv/categ_serv.module';
import { AgendaModule } from './agenda/agenda.module';
import { ComentarioModule } from './comentario/comentario.module';
import { AuthModule } from 'auth/auth.module';

@Module({
  imports: [ClienteModule, CategServModule, AgendaModule, AcessaModule, PostModule, EnderecoModule, PrestServModule, ComentarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
