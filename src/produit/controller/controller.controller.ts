import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Service } from '../service/produit/.service';
import { Request, Response } from 'express';

@Controller('controller')
export class ControllerController {
    constructor(private  serviceProduit: Service){}


    @Get('/:id')
     searchUserById(@Param('id',ParseIntPipe) id: number) {
        const user = this.serviceProduit.findUserById(id);
        if (user) return user;
        else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    
}


