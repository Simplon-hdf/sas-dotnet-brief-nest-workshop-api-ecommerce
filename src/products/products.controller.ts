import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    @ApiOperation({ description: 'Add a new product' })
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Get()
    @ApiOperation({ description: 'Retrieve products list' })
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':uuid')
    @ApiOperation({ description: 'Retrieve a product by its UUID' })
    findOne(@Param('uuid') uuid: string) {
        return this.productsService.getByUUID(uuid);
    }

    @Patch(':uuid')
    update(
        @Param('uuid') uuid: string,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productsService.update(uuid, updateProductDto);
    }

    @Delete(':uuid')
    @ApiOperation({ description: 'Delete a product by its UUID' })
    remove(@Param('uuid') uuid: string) {
        return this.productsService.remove(uuid);
    }
}
