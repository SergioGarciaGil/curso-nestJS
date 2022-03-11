import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  //   transform(value: any, metadata: ArgumentMetadata) {
  //     return value;
  //   }

  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10); //valor en base 10
    if (isNaN(val)) {
      throw new BadRequestException(`|${value}| No es un número`);
    }
    return val;
  }
}
