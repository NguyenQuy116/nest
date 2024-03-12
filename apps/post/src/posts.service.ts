import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PrismaClient } from '@prisma/client';
import { RabbitMQService } from 'apps/users/rabbitmq.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaClient,private readonly rabbitMQService: RabbitMQService) {}

  async processUserCreationMessage(userData: any) {
    // Xử lý thông điệp tạo người dùng ở đây
    console.log('Received user creation message:', userData);
    // Gửi thông điệp tạo bài post tới RabbitMQ
    await this.rabbitMQService.createPostMessage(userData);
  }
  
  async create(createPostInput: CreatePostInput) {
    console.log(createPostInput);
  
    const newItem = await this.prisma.post.create({
      data: {
        id: createPostInput.id,
        body: createPostInput.body,
        authorId: createPostInput.authorId
      },
    });
  
    return newItem;
  }
  
 async findAll() {
    const items = await this.prisma.post.findMany();
    return items;
  }

 async findOne(id: string) {
    const item = await this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    // const channelData = await this.channelService.findById();
    // const newItem = { ...item, channel: channelData };
    // return newItem;
  }
  async forAuthor(authorId: string){
    const item = await this.prisma.post.findMany({
      where: {
        id: authorId,
      },
    });
    return item
  }

}
