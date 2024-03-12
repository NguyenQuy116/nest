import { PrismaClient } from '@prisma/client';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaClient){}
  async create(createUserInput: CreateUserInput) {
    const newItem = await this.prisma.user.create({
      data: {
        id: createUserInput.id.toString(),
        email: createUserInput.email,
        password: createUserInput.password,
      },
    });
    if (!newItem) {
      return newItem;
    }
    return newItem;
  }

  async showList(): Promise<any[]> {
    const items = await this.prisma.user.findMany();
    return items;
  }

  async findById(input: string): Promise<User> {
    const item = await this.prisma.user.findUnique({
      where: {
        id: input,
      },
    });

    return item;
  }

}
