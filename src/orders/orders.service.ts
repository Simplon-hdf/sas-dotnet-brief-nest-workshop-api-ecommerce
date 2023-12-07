import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class OrdersService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(createOrderDto: CreateOrderDto) {
        const deliverAt = new Date();
        deliverAt.setDate(deliverAt.getDate() + 7);

        const orderTotalCostHT: number = 0;

        const orderTotalQuantity: number = 0;

        const createOrder = await this.prisma.orders.create({
            data: {
                user: {
                    connect: {
                        UUID: createOrderDto.user_UUID,
                    },
                },
                order_total_cost_ht: orderTotalCostHT,
                order_total_quantity: orderTotalQuantity,
                deliver_at: deliverAt,
            },
        });

        const createdOrder = new NormalizedResponse(
            `Order n° ${createOrder.id} has been created`,
            createOrder,
        ).toJSON();
        return createdOrder;
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
    }
}
