import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class OrdersService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(createOrderDto: CreateOrderDto) {
        const orderItems = createOrderDto.products;

        let orderTotalCostHT: number = 0;
        let orderTotalQuantity: number = 0;
        for (let productItem of orderItems) {
            const product = await this.prisma.products.findUnique({
                where: {
                    UUID: productItem.product_uuid,
                },
            });
            orderTotalCostHT += +product.price * productItem.quantity;
            orderTotalQuantity += productItem.quantity;
        }

        const deliverAt = new Date();
        deliverAt.setDate(deliverAt.getDate() + 7);

        const order = await this.prisma.orders.create({
            data: {
                user: {
                    connect: {
                        UUID: createOrderDto.user_UUID,
                    },
                },
                order_total_cost_ht: orderTotalCostHT,
                order_total_quantity: orderTotalQuantity,
                deliver_at: deliverAt,
                products: {
                    createMany: {
                        data: orderItems.map((orderItem) => ({
                            product_UUID: orderItem.product_uuid,
                        })),
                    },
                },
            },
        });

        const createdOrder = new NormalizedResponse(
            `Order n° ${order.id} has been created`,
            order,
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
