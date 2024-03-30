import { Injectable } from '@nestjs/common';

@Injectable()
export class Service {
    
    users: { id: number; name: string; mail: string; }[] = [
        {
            id: 1,
            name: 'adem',
            mail: 'benammaradem123',
        },
        {
            id: 2,
            name: 'ahmed',
            mail: 'benammaahmed123',
        },
        {
            id: 3,
            name: 'aziz',
            mail: 'azert@123',
        }
    ];
   
    findUserById(id: number) {
        if (!this.users) {
            throw new Error('Users array is undefined');
        }
        return this.users.find((user) => user.id === id);
    }
    getUser(){
        return this.users;
    }

}
