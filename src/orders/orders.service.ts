import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'utils/noramlized-response';

@Injectable()
export class OrdersService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(createOrderDto: CreateOrderDto) {
        const createOrder = new NormalizedResponse(
            `Order n° ${createOrderDto.id} has been created`,
            await this.prisma.orders.create({
                data: {
                    id: createOrderDto.id,
                    product_quantity: createOrderDto.product_quantity,
                    total_price: createOrderDto.total_price,
                    order_date: createOrderDto.order_date,
                    shipping_date: createOrderDto.shipping_date,
                },
            }),
        ).toJSON();
    }

    findAll() {
        return `This action returns all orders`;
    }

    public async getById(id: number) {
        const gettedOrder = new NormalizedResponse(
            `Order ${id} has been found`,
            await this.prisma.orders.findUnique({
                where: {
                    id: id,
                },
            }),
        ).toJSON();
    }

    public async updateById(id: number, updateOrderDto: UpdateOrderDto) {}

    public async removeById(id: number) {
        const removeOrder = new NormalizedResponse(
            `Order n° ${id} has been deleted`,
            await this.prisma.orders.delete({
                where: {
                    id: id,
                },
            }),
        ).toJSON();

        return `This action removes a #${id} order`;
    }
}
