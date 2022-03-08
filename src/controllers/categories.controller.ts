import { Controller, Get, Query, Param, Post, Body} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

     @Get(':id/products/:productId')
  getCategory1(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
  
}
