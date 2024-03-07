import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Item } from './entity';
import { ItemService } from './item.service';
import { ItemInput, UpdateItemInput } from './input';
import { item } from '@prisma/client';

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
  async createItem(@Args('item') item: ItemInput): Promise<Item> {
    const flag = await this.itemService.create(item);
    return flag;
  }
  @Mutation((returns) => Item)
  async findOneById(@Args('id') id: number): Promise<Item> {
    const flag = await this.itemService.findById(id);
    return flag;
  }
  @Mutation((returns) => Item)
  async update(@Args('item') item: UpdateItemInput): Promise<Item> {
    console.log(item);
    
    const flag = await this.itemService.update(item);
    return flag;
  }
  @Mutation(() => Boolean)
  async deleteItem(@Args('id') id: number): Promise<boolean> {
    return this.itemService.deletebyId(id);
  }
}

