import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsUUID } from 'class-validator';

export class CreateOrderDto {
    @ApiProperty({
        description: 'This field represents the product quantity',
    })
    @IsNumber()
    product_quantity: number;

    @ApiProperty({
        description: 'This field represents the user UUID',
    })
    @IsUUID()
    user_UUID: string;

    @ApiProperty({
        description: 'This field represents the order total price',
    })
    @IsNumber()
    total_order: number;
}
