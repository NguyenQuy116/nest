import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ItemResolver } from '../item/resolvers/index';
import { ItemService } from './services/index';
@Module({
  providers: [ItemResolver,ItemService,PrismaClient]
  
})
export class ItemModule {}
