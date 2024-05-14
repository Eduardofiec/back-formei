import { Module } from '@nestjs/common';
import { ClienteService } from 'cliente/cliente.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ClienteService],
  exports: [AuthService]
})
export class AuthModule {}
