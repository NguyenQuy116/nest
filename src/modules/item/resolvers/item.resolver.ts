import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Item } from '../../../Entities/item.entity';
import { ItemService } from '../services/index';
import {  idInput } from '../args/index';
import { createInput,UpdateItemInput } from '../inputs/index';


@Resolver()
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => String)
  async hello(): Promise<string> {
    return 'Hello world!';
  }

  @Query(() => [Item])
  async listItem(): Promise<Item[]> {
    return this.itemService.showList();
  }
  @Mutation((returns) => Item)
  async createItem(@Args('item') item: createInput): Promise<Item> {
    const flag = await this.itemService.create(item);
    return flag;
  }
  @Mutation((returns) => Item)
  async findOneById(@Args('input') input: idInput): Promise<Item> {
    const flag = await this.itemService.findById(input.id);
    return flag;
  }
  @Mutation((returns) => Item)
  async update(@Args('item') item: UpdateItemInput): Promise<Item> {
    console.log(item);
    const flag = await this.itemService.update(item);
    return flag;
  }
  @Mutation(() => Boolean)
  async deleteItem(@Args('id') input: idInput): Promise<boolean> {
    return this.itemService.deletebyId(input.id);
  }
}

