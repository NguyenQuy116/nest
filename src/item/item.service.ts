import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ItemInput, UpdateItemInput } from './input';
import { Item } from './entity';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaClient) {}
  async showList(): Promise<any[]> {
    const items = await this.prisma.item.findMany();
    console.log(items);

    return items;
  }
  async create(input: ItemInput): Promise<Item> {
    const newItem = await this.prisma.item.create({
      data: {
        name: input.name,
        quantity: input.quantity,
      },
    });
    if (!newItem) {
      return newItem;
    }
    return newItem;
  }
  async findById (input: number): Promise<Item> {
    const item = await this.prisma.item.findUnique({
      where: {
        id: input,
      }
    })
    return item;
  }
  async update( input: UpdateItemInput): Promise<Item> {
    try {
   const item =   await this.prisma.item.update({
        where: {id: input.id },
        data: {
          name: input.name,
          quantity: input.quantity,
        },
      });
      return item;
    } catch (error) {
      console.error('Error updating item:', error);
    }
  }
  async deletebyId(input : number): Promise<boolean>{
    const flag = await this.prisma.item.delete({
      where: {
        id: input
      }
    })
    return true;
  }
}
