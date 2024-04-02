import { Body, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseBoolPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common'; // Import Get decorator
import { CreateUserDto } from 'src/dto';
import { UsersService } from 'src/users/services/users/users.service';


@Controller('users')
export class UsersController {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService,
    ) {}

    @Get() 
    getUsers(@Query('sortDesc',ParseBoolPipe) sortBy: boolean) {
        console.log(sortBy);
                return this.userService.getUsers();
    }
    @Get('/:username')
    getUserByUsername(@Param('username') username: string){
        const user =  this.userService.getUserByUsername(username);
        if (user) return user;
        else throw new HttpException('User not found',HttpStatus.BAD_REQUEST);
    }
    @Post('/add')
    @UsePipes(new ValidationPipe())
    Create(@Body()userData:CreateUserDto){
        console.log(userData)
        return HttpStatus.CREATED;
    }
}
