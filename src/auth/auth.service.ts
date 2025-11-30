// src/auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: userService,
        private jwtService: JwtService,
    ) {}

    async refreshToken(userId: number) {
        const user = await this.userService.findById(userId);

        if(!user) {
            throw new UnauthorizedException();
        }

        const payload = { 
            login: user.Login, 
            id: user.id, 
            role: user.Role,
            email: user.email,
            name: user.Name,
            lastname: user.Lastname,
            lang: user.Lang,
            adres: user.Adres,
            joined: user.date_created,
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async signIn(Login: string, Password: string) {

        const attempts = await this.userService.checkLoginAttempts(Login);
        if (attempts && attempts >= 5) {
            throw new UnauthorizedException(0);
        }

        const user = await this.userService.login({ Login, Password } as any); 

        if (!user) {
            throw new UnauthorizedException(5-attempts);
        }

        const payload = { 
            login: user.Login, 
            id: user.id, 
            role: user.Role,
            email: user.email,
            name: user.Name,
            lastname: user.Lastname,
            lang: user.Lang,
            adres: user.Adres,
            joined: user.date_created,
        };
        
        return {
            access_token: this.jwtService.sign(payload),
            //user: { id: user.id, username: user.Login, role: user.Role } 
        };
    }
}