import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { App } from "./entities/app.entity";
import { Repository } from "typeorm";
import { AccesDto } from "./dtos/acces.dto";

@Injectable()
export class AppsService {
    constructor(@InjectRepository(App) private appRepository : Repository<App> ) {}

    async getApps() {
        return await this.appRepository.find();
    }

    async checkAppAcces (body: AccesDto, userRole: string) {
        const app = await this.appRepository.findOneBy({Name_en: body.app});

        if(!app)
        {
            return {access: false}
        }

        if(app.Role === userRole || app.Role === "global" || userRole === "admin")
        {
            return {access: true}
        }

        return {access: false}
    }
}