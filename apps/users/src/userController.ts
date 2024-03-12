import { Controller } from "@nestjs/common";
import { RabbitMQService } from "../rabbitmq.service";
import { Args,Mutation } from "@nestjs/graphql";

@Controller('users')
export class UserController{
    constructor(private readonly rabbitMQService: RabbitMQService){}
    @Mutation(() => String)
  async createUser(@Args('userData') userData: any): Promise<string> {
    // Gửi thông điệp tạo người dùng tới RabbitMQ
    await this.rabbitMQService.createUserMessage(userData);
    return 'User creation request sent successfully';
  }
}