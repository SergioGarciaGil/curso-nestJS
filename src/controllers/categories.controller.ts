import { Controller, Get, Query, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { get } from 'http';

@Controller('categories')
export class CategoriesController {


  @Get()
  getCategory(@Query('limit') limit: 100, @Query('offset') ofsset: number) {
    return {
      message: `Limit: ${limit} Offset: ${ofsset}`
    }
  }

  @Get(':id')
  getCategoryId(@Param('id') id: number) {
    return {
      id,
      message: 'Mostrando product'
    }
    }


//   @Get(':id/products/:productId')
//   getCategory1(@Param('productId') productId: string, @Param('id') id: string) {
//     return `product ${productId} and ${id}`;
//   }
  @Get(':id/product/:productId')
  getCategory2(@Param('productId') productId: string, @Param('id') id: string) {
    return {
      id,
      message: ` Product: ${productId} `
    }
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload
    }
    }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload
    }
  }
  @Delete('id')
  delete(@Param('id') id: number) {
    return {
      id
    }
  }
  
}
