import { Controller, Get, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {
   
  //DECORADOR PRA VARIOS PRODUCTOS QUERY
  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `products: limit=>${limit} offSet=>${offset}`
  //   }
  @Get('filter')
  getFilter() {
    return {
      message:('Yo soy filter!')
    }
  }
  @Get()
  getProducts(
    @Query('brand') brand: string,
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
  ) {
    return {
      message: `products: brand =>${brand} limit=>${limit} offset=>${offset}`
    }
  }
   

  // @Get(':productId')
  // getProduct(@Param('productId') productId: string) {
  //     return {
  //       message: `product:  ${productId}`
  //   };
  // }
  @Get(':id')
  getProduct(@Param('id') id: number) {
    return {
      message: 'mostrando product',
      id,
     
    }
    }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    }
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id
    }
  }
}
