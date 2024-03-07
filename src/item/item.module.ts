import { Module } from '@nestjs/common';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';
import { PrismaClient } from '@prisma/client';
@Module({
  providers: [ItemResolver,ItemService,PrismaClient]
  
})
export class ItemModule {}
