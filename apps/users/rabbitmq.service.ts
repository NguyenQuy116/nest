// rabbitmq.service.ts
import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'queue_name',
      },
    });
  }

  async createUserMessage(userData: any) {
    await this.client.emit('user_creation', userData).toPromise();
  }

  async createPostMessage(userData: any) {
    await this.client.emit('post_creation', userData).toPromise();
  }
}
