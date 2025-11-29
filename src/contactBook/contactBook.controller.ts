import { Controller, Get, Param, Post, Body, UseGuards } from "@nestjs/common";
import { ContactBookService } from "./contactBook.service";
import { CreateContactDto } from "./dtos/createContact.dto";
import { AuthGuard } from "@nestjs/passport/dist/auth.guard";


@UseGuards(AuthGuard('jwt'))
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

    @Post("/edit/:id")
    async editContact(@Param("id") id : string, @Body() body : CreateContactDto) {
        return await this.contactBookService.editContact(id, body);
    }
}