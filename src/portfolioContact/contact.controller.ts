import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { MailDto } from "./dtos/mail.dto";

@Controller("contact")
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post("sendEmail")
    SendContactMessage(@Body() body : MailDto) {
        return this.contactService.sendContactMessage(body.Message, body.Email);
    }
} 
