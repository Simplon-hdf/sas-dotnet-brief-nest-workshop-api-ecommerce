import { Injectable } from '@nestjs/common';
import { CreateOrderDto, CreateOrderDtoProductItem } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class OrdersService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(createOrderDto: CreateOrderDto) {
        const deliverAt = new Date();
        deliverAt.setDate(deliverAt.getDate() + 7);

        let orderTotalCostHT: number = 0;

        let orderTotalQuantity: number = 0;

        const products: CreateOrderDtoProductItem[] = createOrderDto.products;
        for(let productItem of products) {
            const product = await this.prisma.products.findUnique({
                where: {
                    UUID: productItem.product_uuid
                }
            });
            orderTotalCostHT += +product.price * productItem.quantity;
            orderTotalQuantity += productItem.quantity;
        }

        const createOrder = await this.prisma.orders.create({
            data: {
                user: {
                    connect: {
                        UUID: createOrderDto.user_UUID,
                    },
                },
                // products: {
                //     create: [
                //         {
                //             product: {
                //                 connect: {
                //                     product_UUID: "84654711-9b00-42e8-9054-c333af87e729",
                //                 }
                //             }
                //         }
                //     ]
                // },

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
