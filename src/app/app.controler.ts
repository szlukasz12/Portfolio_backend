import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AppsService } from "./app.service";
import { AccesDto } from "./dtos/acces.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("apps")
export class AppsController {
    constructor(private appsService: AppsService) {}

    @Get("/list")
    getList(){
        return this.appsService.getApps();
    }

    @Post("/acces")
    @UseGuards(AuthGuard('jwt'))
    checkAcces(@Body() body : AccesDto, @Req() req: {user: {Role: string}}){
        return this.appsService.checkAppAcces(body, req.user.Role);
    }
}