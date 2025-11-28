import { Module } from "@nestjs/common";
import { ContactBookController } from "./contactBook.controller";
import { ContactBookService } from "./contactBook.service";

@Module({
    controllers: [ContactBookController],
    providers: [ContactBookService],
})
export class ContactBookModule {}