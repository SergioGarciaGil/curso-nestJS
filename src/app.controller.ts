import { Controller, Get, Param} from '@nestjs/common';
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
    return 'ruta/sass'
  }
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product:  ${productId}`
  }
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`
  }
}
