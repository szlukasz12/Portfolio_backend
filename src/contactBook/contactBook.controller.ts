import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { ContactBookService } from "./contactBook.service";
import { CreateContactDto } from "./dtos/createContact.dto";

// products
@Controller("contacts")
export class ContactBookController {

    constructor (private contactBookService: ContactBookService) {}

    @Get("/list")
    getContacts() {
        return this.contactBookService.getContacts();
    }

    @Get("/contact/:id")
    getContactById(@Param("id") id : string) {
        return this.contactBookService.getById(id);
    }

    @Post("/add")
    addContact(@Body() body : CreateContactDto) {
        return this.contactBookService.addContact(body);
    }
}