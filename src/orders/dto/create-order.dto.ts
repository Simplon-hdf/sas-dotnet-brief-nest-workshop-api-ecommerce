import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsUUID, Length, Min } from 'class-validator';

export class CreateOrderDto {
    @ApiProperty({
        description: 'This field represents the user UUID',
    })
    @IsUUID()
    @IsNotEmpty()
    user_UUID: string;

    @ApiProperty({
        description: 'This field represents products in this order (array of CreateOrderDtoProductItem)',
    })
    @IsArray()
    @ArrayMinSize(1)
    products: CreateOrderDtoProductItem[];
}

export class CreateOrderDtoProductItem {
    @ApiProperty({
        description: 'This field represents the product UUID',
    })
    @IsUUID()
    @IsNotEmpty()
    product_uuid: string;

    @ApiProperty({
        description: 'This field represents the product quantity',
    })
    @IsInt()
    @Min(1)
    quantity: number;
}
