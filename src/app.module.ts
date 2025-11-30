import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactBookModule } from './contactBook/contactBook.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppsModule } from './app/app.module';
import { SkillsModule } from './skills/skills.module';

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
    UserModule,
    AppsModule,
    SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
