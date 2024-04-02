import { IsEmail, IsNotEmpty } from "@nestjs/class-validator";

export class CreateUserDto {
    id : number;
    name: string;
    @IsNotEmpty()
    @IsEmail()
    mail:string;
}