import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { userService } from "src/user/user.service";
import { ConfigService } from "@nestjs/config"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly userService: userService,
        private readonly configService: ConfigService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET', 'FALLBACK_SECRET_KEY_FOR_DEV'),
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