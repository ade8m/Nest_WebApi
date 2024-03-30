import { Controller, Get, HttpException, HttpStatus, Inject, Param } from '@nestjs/common'; // Import Get decorator
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService,
    ) {}

    @Get() 
    getUsers() {
        return this.userService.getUsers();
    }
    @Get('/:username')
    getUserByUsername(@Param('username') username: string){
        const user =  this.userService.getUserByUsername(username);
        if (user) return user;
        else throw new HttpException('User not found',HttpStatus.BAD_REQUEST);
    }
}
