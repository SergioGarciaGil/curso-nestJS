import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, //no deja agregar otra linea del producto de las ya establecidas
    forbidNonWhitelisted:true //igual que whitelist pero le genera un mensaje de error
   
  }));
  await app.listen(3000);
}

bootstrap();
