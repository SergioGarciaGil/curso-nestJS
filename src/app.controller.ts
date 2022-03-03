import { Controller, Get, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'HOLA MUNDO';
  }
  @Get('nuevo')
  newEnpoint() {
    return 'yo soy nuevo';
  }
  @Get('/ruta')
  hello() {
    return 'ruta/sass';
  }
  @Get('products/filter')
  getFilter() {
    return('Yo soy filter')
    }
  //DECORADOR PRA VARIOS PRODUCTOS QUERY
  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `products: limit=>${limit} offSet=>${offset}`
  //   }

  @Get('products')
  getProducts(
    @Query('brand') brand: string,
    @Query('limit') limit: number=100,
    @Query('offset') offset: number=0,
  ) {
    return `products: brand =>${brand} limit=>${limit} offset=>${offset}`;
  }
  

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product:  ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
