import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UserModule } from './user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  const config = new DocumentBuilder()
    .setTitle('Custom Project')
    .setDescription('Custom API description')
    .setVersion('1.0')
    .addTag('custom')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
