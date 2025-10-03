import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Establecer validaciones de formato request:
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Lanza una expeción de error en caso de atributos inconsistentes en el dto (que no estén en el dto)
      forbidNonWhitelisted: true, // Quita atributos que no están
      transform: true // Transforma el topo de dato en el request a los que están en el dto 
    })
  )

  app.enableCors();
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();