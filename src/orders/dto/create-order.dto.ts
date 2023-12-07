import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateOrderDto {
    @ApiProperty({
        description: 'This field represents the user UUID',
    })
    @IsUUID()
    @IsNotEmpty()
    user_UUID: string;
}
