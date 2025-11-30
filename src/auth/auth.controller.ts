import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../user/dtos/userLogin.dto'; // Pamiętaj o imporcie DTO
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    async login(@Body() body: UserLoginDto) {
        return this.authService.signIn(body.Login, body.Password);
    }

    @Get('/status')
    @UseGuards(AuthGuard('jwt'))
    async getStatus(@Request() req) {
        return { 
            message: 'Token aktywny.',
            user: req.user
        };
    }

    @Post('/refreshToken')
    @UseGuards(AuthGuard('jwt'))
    async refreshToken(@Request() req : { user : { id : number }}) {
        const userId = req.user.id;
        return this.authService.refreshToken(userId); // Zakładamy, że hasło nie jest potrzebne do odświeżenia tokena
    }
}