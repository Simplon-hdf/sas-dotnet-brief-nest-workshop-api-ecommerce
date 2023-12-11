import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: "This field represents the user's pseudo",
        maxLength: 20,
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    user_pseudo: string;

    @ApiProperty({
        description: "This field represents the user's username",
        maxLength: 30,
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 30)
    username: string;

    @ApiProperty({
        description: "This field represents the user's password",
    })
    @IsString()
    @IsNotEmpty()
    @Length(1, 72)
    user_password: string;
}
