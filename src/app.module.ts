
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemResolver } from './item/item.resolver';
import { ApolloDriver } from '@nestjs/apollo';


@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: true,
  }), ],
  providers: [ItemResolver],
})
export class AppModule {}