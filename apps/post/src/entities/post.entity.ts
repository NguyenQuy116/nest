import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class Post {
  @Field()
  id: string;

  @Field()
  body: string;

  @Field()
  authorId: string;

  @Field(() => User)
    user?: User;
}
