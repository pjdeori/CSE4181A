import { Body, Controller, Get, Param, Post, Response } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    @Get('getUserByID/:id')
    async findOne(@Param('id') id:number) {
    console.log(id)
    const user = [
        {
          name: 'Mr X',
          id: 1,
        },
        {
          name: 'Mr Y',
          id: 2,
        },
        {
          name: 'Mr Z',
          id: 3,
        },
        {
          name: 'Mr A',
          id: 4,
        },
        {
          name: 'Mr B',
          id: 5,
        },
      ];
      for(let val of user)
      { 
          if(val.id==id){
            console.log(val.name)
            return val.name;
          }
      }
    
    }
  }



