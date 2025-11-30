import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { userService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";


@UseGuards(AuthGuard('jwt'))
@Controller("user")
export class UserController {
    constructor (private readonly userService: userService) {}

    @Post("/setLang")
    setLanguage(@Body() body : { Lang: string }, @Req() req : { user : { id : number }}) {
        return this.userService.setLanguage(req.user.id, body.Lang);
    }
}