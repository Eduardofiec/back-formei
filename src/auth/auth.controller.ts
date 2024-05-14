import { Controller, UnauthorizedException, HttpCode, Post, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthdto } from './dto/createAuthdto';

@Controller('auth')
export class AuthController {
        constructor(private authService: AuthService) {}
      
        @HttpCode(HttpStatus.OK)
        @Post('login')
        signIn(@Body() signInDto: CreateAuthdto) {
          return this.authService.signIn(signInDto.id, signInDto.senha);
        }
      
}
