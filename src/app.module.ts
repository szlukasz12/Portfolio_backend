import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactBookModule } from './contactBook/contactBook.module';

@Module({
  imports: [ContactBookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
