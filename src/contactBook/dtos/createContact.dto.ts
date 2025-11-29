import { isString, IsString } from "class-validator";

export class CreateContactDto {
    @IsString()
    Name: string;

    @IsString()
    Tel: string;

    @IsString()
    City: string;
}