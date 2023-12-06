import { ApiProperty } from '@nestjs/swagger';
import {
    IsDecimal,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length,
    MaxLength,
    Min,
    maxLength,
} from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 20)
    @ApiProperty({
        description: 'Product name',
        required: true,
        minLength: 1,
        maxLength: 20,
    })
    name: string;

    @IsString()
    @Length(1, 500)
    @ApiProperty({
        description: 'Product description',
        required: false,
        minLength: 1,
        maxLength: 500,
    })
    description: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1.0)
    @ApiProperty({
        description: 'Product price',
        required: true,
        minimum: 1.0,
    })
    price: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @ApiProperty({
        description: 'Product quantity in stock',
        required: true,
        minimum: 1,
    })
    quantity: number;
}
