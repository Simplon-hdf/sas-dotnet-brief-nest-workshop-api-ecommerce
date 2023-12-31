import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto) {
        const product = await this.prisma.products.create({
            data: {
                name: createProductDto.name,
                description: createProductDto.description,
                price: createProductDto.price,
                quantity: createProductDto.quantity
            },
        });

        return new NormalizedResponse(
            'Product created successfully',
            product,
        ).toJSON();
    }

    async findAll() {
        const products = await this.prisma.products.findMany();

        return new NormalizedResponse(
            'Products retrieved successfully',
            products,
        ).toJSON();
    }

    async getByUUID(uuid: string) {
        const product = await this.prisma.products.findUnique({
            where: {
                UUID: uuid,
            },
        });

        return new NormalizedResponse(
            'Product retrieved successfully',
            product,
        ).toJSON();
    }

    async update(uuid: string, updateProductDto: UpdateProductDto) {
        const product = await this.prisma.products.update({
            data: {
                name: updateProductDto.name,
                description: updateProductDto.description,
                price: updateProductDto.price,
                quantity: updateProductDto.quantity,
                updated_at: new Date().toISOString(),
            },
            where: {
                UUID: uuid,
            },
        });

        return new NormalizedResponse(
            'Product updated successfully',
            product,
        ).toJSON();
    }

    remove(uuid: string) {
        const product = this.prisma.products.delete({
            where: {
                UUID: uuid,
            },
        });

        return new NormalizedResponse(
            'Product deleted successfully',
            product,
        ).toJSON();
    }
}
