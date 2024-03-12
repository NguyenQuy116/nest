import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: String;
  @Field()
  email: string;
  @Field()
  password: string;
}
