import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    user_pseudo: string;
    username: string;
    user_password: string;
    create_at: Date;
}
