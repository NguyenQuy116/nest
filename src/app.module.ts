import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ItemModule } from './item/item.module';
import { PrismaClient } from '@prisma/client';


@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
    }),
    ItemModule,
  ],
  providers: [],
})
export class AppModule {}
