import { Controller, UnauthorizedException, HttpCode, Post, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthdto } from './dto/createAuthdto';

@Controller('auth')
export class AuthController {
        constructor(private authService: AuthService) {}
      
        @HttpCode(HttpStatus.OK)
        @Post('login')
        signIn(@Body() signInDto: CreateAuthdto) {
          const { id, senha, tipo } = signInDto;
          return this.authService.signIn(id, senha, tipo);
        }
      
}
