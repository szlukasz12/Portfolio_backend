import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtPayload } from "./interfaces/jwt-payload.intreface";
import { PassportStrategy } from "@nestjs/passport";
import { userService } from "src/user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor( private readonly userService: userService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SEKRETNYKLUCZ',
        });
    }

    async validate(payload: any) {
        const user = await this.userService.findById(payload.id);

        if (!user) {
            // Jeśli użytkownik z tokena już nie istnieje (np. został usunięty), odrzuć token
            throw new UnauthorizedException(); 
        }
        
        return { 
            id: user.id,
            Login: user.Login, 
            Role: user.Role,
        };
    }
}