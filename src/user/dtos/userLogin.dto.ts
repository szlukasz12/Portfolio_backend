import { IsString } from "class-validator";

export class UserLoginDto {
    @IsString()
    Login: string;

    @IsString()
    Password: string;
}