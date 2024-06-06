import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Habilita CORS globalmente

  // Habilita CORS específico para o frontend
  app.enableCors({
    origin: ["http://localhost:5173"],  // Defina o valor exato do domínio do frontend
    methods: 'POST, GET',
    credentials: true, // Permite credenciais (cookies, cabeçalhos de autorização, etc.)
  });

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}

bootstrap();
