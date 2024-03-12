import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaModule } from './prismaModule';
import { PostController } from './post.controller';
import { RabbitMQService } from 'apps/users/rabbitmq.service';
@Module({
  imports:[PrismaModule],
  providers: [PostsResolver, PostsService,PostController,RabbitMQService]
})
export class PostsModule {}
