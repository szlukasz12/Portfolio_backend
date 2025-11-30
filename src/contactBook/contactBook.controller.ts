import { Controller, Get, Param, Post, Body, UseGuards, Delete } from "@nestjs/common";
import { ContactBookService } from "./contactBook.service";
import { CreateContactDto } from "./dtos/createContact.dto";
import { AuthGuard } from "@nestjs/passport/dist/auth.guard";


@UseGuards(AuthGuard('jwt'))
// products
@Controller("contacts")
export class ContactBookController {

    constructor (private contactBookService: ContactBookService) {}

    @Get("/list")
    async getContacts() {
        return await this.contactBookService.getContacts();
    }

    @Get("/contact/:id")
    async getContactById(@Param("id") id : string) {
        return await this.contactBookService.getById(id);
    }

    @Post("/add")
    async addContact(@Body() body : CreateContactDto) {
        return await this.contactBookService.addContact(body);
    }

    @Post("/edit/:id")
    async editContact(@Param("id") id : string, @Body() body : CreateContactDto) {
        return await this.contactBookService.editContact(id, body);
    }

    @Delete("/delete/:id")
    async deleteContact(@Param("id") id : string) {
        return await this.contactBookService.deleteContact(id);
    }
}