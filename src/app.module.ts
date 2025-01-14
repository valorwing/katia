import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkpreviewMiddleware } from 'src/linkpreview/linkpreview.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // путь к статическим файлам
      serveStaticOptions: {
        setHeaders: (res) => {
          res.set('Cache-Control', 'public, max-age=31536000, immutable');
        },
        index: false,
        fallthrough: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LinkpreviewMiddleware).forRoutes('*');
  }
}
