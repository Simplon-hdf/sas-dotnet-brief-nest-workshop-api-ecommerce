import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    rickrolled() {
        return fs.readFileSync('./src/front/index.html', 'utf-8');
    }
}
