import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    // @Get()
    // findAllBYUUID('uuid') {
    //   return this.usersService.findAllByUUID(uuid);
    // }

    @Get()
    getByUUID(@Param('uuid') uuid: string) {
        return this.usersService.getByUUID(uuid);
    }

    // @Get('orders')
    // getOrderByUUID(@Param('uuid') uuid: string) {
    //     return this.orderService.getOrderByUUID(uuid);
    // }

    @Patch(':uuid')
    updateByUUID(
        @Param('uuid') uuid: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return this.usersService.updateByUUID(uuid, updateUserDto);
    }

    @Delete(':uuid')
    removeByUUID(@Param('uuid') uuid: string) {
        return this.usersService.removeByUUID(uuid);
    }
}
