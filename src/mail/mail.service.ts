import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService, private configService: ConfigService,) {}

  async sendUserConfirmation(mail: string, message: string) {
    const recipientEmail = this.configService.get<string>('RECIPIENT_EMAIL');
    
    await this.mailerService.sendMail({
      to: recipientEmail,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Dostałeś wiadomość z formularza kontaktowego',
      template: './contactMessage', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        message: message,
        email: mail,
      },
    });
  }
}
