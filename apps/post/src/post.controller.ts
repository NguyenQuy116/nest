import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class PostController {
  @EventPattern('my-event')
  async handleMyEvent(data: any) {
    console.log('Received event:', data);
    // Xử lý sự kiện ở đây
  }
}
