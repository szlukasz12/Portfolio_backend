import { Injectable } from "@nestjs/common";
import { MailService } from "src/mail/mail.service";

@Injectable()
export class ContactService {
    constructor(private mailService: MailService) {}

    async sendContactMessage(message: string, email: string) {
        try {
            await this.mailService.sendUserConfirmation(email, message);
            return { success: true, message: 'Message sent successfully' };
        } catch (error) {
            throw new Error('Failed to send contact message');
        }
    }
}