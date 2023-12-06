import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { IsDate, IsDecimal, IsNumber } from 'class-validator';

export class CreateOrderDto {
    @ApiProperty({
        description: 'This field represents the order number',
    })
    @IsNumber()
    id: number;

    @ApiProperty({
        description: 'This field represents the product quantity',
    })
    @IsNumber()
    product_quantity: number;

    @ApiProperty({
        description: 'This field represents when the order total price',
    })
    @IsDecimal()
    total_price: Decimal;

    @ApiProperty({
        description: 'This field represents when the order was created',
    })
    @IsDate()
    order_date: Date;

    @ApiProperty({
        description: 'This field represents when the order was shipped',
    })
    @IsDate()
    shipping_date: Date;
}
