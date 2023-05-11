import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findall(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseUUIDPipe) id: string): Item {
        return this.itemsService.findById(id);
    }

    // @Post()
    // create(
    //     @Body('id') id : string,
    //     @Body('name') name : string,
    //     @Body('price') price : number,
    //     @Body('description') description : string,
    //     ): Item {
    //         const item: Item = {
    //             id,
    //             name,
    //             price,
    //             description,
    //             status: ItemStatus.ON_SALE,
    //         }
    //     return this.itemsService.create(item);
    // }

    @Post()
    create(@Body() CreateItemDto: CreateItemDto): Item {
        return this.itemsService.create(CreateItemDto);
    }

    @Patch(':id')
    updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
        return this.itemsService.updateStatus(id);
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id :string): void {
        this.itemsService.delete(id);
    }
}
