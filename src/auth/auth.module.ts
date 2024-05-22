import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClienteService } from 'cliente/cliente.service';
import { PrestServService } from 'prest_serv/prest_serv.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'oooooookenjiii',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers:[AuthController],
  providers: [AuthService, ClienteService, PrestServService], // Certifique-se de incluir JwtStrategy se estiver usando uma
  exports: [AuthService], // Se AuthService for usado em outros módulos
})
export class AuthModule {}
