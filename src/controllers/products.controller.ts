import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe'
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //DECORADOR PRA VARIOS PRODUCTOS QUERY
  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `products: limit=>${limit} offSet=>${offset}`
  //   }
  @Get('filter')
  getFilter() {
    return {
      message: 'Yo soy filter!',
    };
  }
  @Get()
  getProducts(
    @Query('brand') brand: string,
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
  ) {
    // return {
    //   message: `products: brand =>${brand} limit=>${limit} offset=>${offset}`
    // }
    return this.productsService.findAll();
  }

  // @Get(':productId')
  // getProduct(@Param('productId') productId: string) {
  //     return {
  //       message: `product:  ${productId}`
  //   };
  // }
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    // return {
    //   id,
    //   message: `product: ${id}`
    // }
    return this.productsService.findOne(id);
  }
  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // }
    return this.productsService.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
