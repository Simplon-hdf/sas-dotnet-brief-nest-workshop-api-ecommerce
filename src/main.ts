import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SwaggerTheme } from 'swagger-themes';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle('API de Nectr')
        .setDescription(
            "Notre boutique Nectr expose une API permettant de manipuler les utilisateurs, les produits et les commandes. Il s'agit ici de la documentation de cette API.",
        )
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);

    const theme = new SwaggerTheme('v3');
    const options = {
        explorer: true,
        customCss: theme.getBuffer('material'),
    };

    SwaggerModule.setup('api', app, document, options);

    await app.listen(3000);
}
bootstrap();
