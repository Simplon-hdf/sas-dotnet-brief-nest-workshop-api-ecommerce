import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'utils/noramlized-response';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(createUserDto: CreateUserDto) {
        const createdUser = new NormalizedResponse(
            `User ${createUserDto.user_pseudo} has been created`,
            await this.prisma.users.create({
                data: {
                    user_pseudo: createUserDto.user_pseudo,
                    username: createUserDto.username,
                    user_password: createUserDto.user_password,
                    created_at: createUserDto.create_at,
                },
            }),
        ).toJSON();
    }

    // public async findAllByUUID(uuid: string) {
    //     const users = new NormalizedResponse(
    //         `User ${uuid} has been found`,
    //         await this.prisma.users.findMany({
    //             where: {
    //                 UUID: uuid,
    //             },
    //         }),
    //     ).toJSON();
    // }

    public async getByUUID(uuid: string) {
        const gettedUser = new NormalizedResponse(
            `User ${uuid} has been found`,
            await this.prisma.users.findUnique({
                where: {
                    UUID: uuid,
                },
            }),
        );
       return gettedUser.toJSON();
    }

    public async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
        const updatedUser = new NormalizedResponse(
            `Users ${updateUserDto.user_pseudo} informations have been updated`,
            await this.prisma.users.update({
                where: {
                    UUID: uuid,
                },
                data: {
                    user_pseudo: updateUserDto.user_pseudo,
                    username: updateUserDto.username,
                    user_password: updateUserDto.user_password,
                    created_at: updateUserDto.create_at,
                },
            }),
        ).toJSON();
    }

    public async removeByUUID(uuid: string) {
        const remvoedUser = new NormalizedResponse(
          `User ${uuid} has been deleted`, await this.prisma.users.delete({
            where:{
              UUID: uuid
            },
          }),
        ).toJSON();
    }
}
