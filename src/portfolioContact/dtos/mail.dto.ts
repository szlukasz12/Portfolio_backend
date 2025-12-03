import { IsString } from "class-validator";

export class MailDto {
    @IsString()
    Email: string;

    @IsString()
    Message: string;
}