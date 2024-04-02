import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User, serializedUser } from 'src/users/interface/user.interface';

@Injectable()
export class UsersService {
    private users: User[]=[
        {
            username:'adem',
            password:'adem',
        },
        {
            username:'azery',
            password:'azery',
        },
        {
            username:'ammar',
            password:'ammar',
        },

    ];
    getUsers(){
        return this.users.map((user)=> plainToClass(serializedUser,user));
    }
    getUserByUsername(username:string){
        return this.users.find((user)=> user.username ===username);
    }
    CreateUser(){
        
    }

}
