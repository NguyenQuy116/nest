import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  id: String;
  @Field()
  email: string;
  @Field()
  password: string;
}
