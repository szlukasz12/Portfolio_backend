// src/auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: userService,
        private jwtService: JwtService, // Wstrzyknięcie usługi JWT
    ) {}

    async signIn(Login: string, Password: string) {
        const user = await this.userService.login({ Login, Password } as any); 

        if (!user) {
            throw new UnauthorizedException('Nieprawidłowy login lub hasło.');
        }

        const payload = { 
            username: user.Login, 
            sub: user.id, 
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