import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactBookModule } from './contactBook/contactBook.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { userModule } from './user/user.module';
import { AppsModule } from './app/app.module';

@Module({
  imports: [
    ContactBookModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.200',
      port: 3306,
      username: 'nestjs',
      password: 'Lukasznet12.!?',
      database: 'Minecraft',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    AuthModule,
    userModule,
    AppsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
