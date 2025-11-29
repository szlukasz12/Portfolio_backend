import { Module } from "@nestjs/common";
import { ContactBookController } from "./contactBook.controller";
import { ContactBookService } from "./contactBook.service";
import { ContactBook } from "./entities/contactBook.entity";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";

@Module({
    imports: [TypeOrmModule.forFeature([ContactBook])],
    controllers: [ContactBookController],
    providers: [ContactBookService],
})
export class ContactBookModule {}