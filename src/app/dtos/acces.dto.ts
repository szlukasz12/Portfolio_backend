import { IsString } from "class-validator";

export class AccesDto {
    @IsString()
    app: string;
}