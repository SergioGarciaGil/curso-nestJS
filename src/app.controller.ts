import { Controller, Get, Param, Query, Post,Body } from '@nestjs/common';
import { query } from 'express';
import { get } from 'http';
import { useStore } from 'react-redux';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

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
    return {
      message: 'ruta/sass'
    }
  }
  
 
}
  
  

  
