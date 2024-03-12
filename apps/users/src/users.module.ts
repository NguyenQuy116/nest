import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver,ApolloFederationDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from '../prismaModule';
import { UserController } from './userController';
import { RabbitMQService } from '../rabbitmq.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver:ApolloFederationDriver,
      autoSchemaFile:{
        federation: 2
      }
    }),
    PrismaModule
  ],
  controllers:[UserController],
  providers: [UsersResolver, UsersService,RabbitMQService],
})
export class UsersModule {}
