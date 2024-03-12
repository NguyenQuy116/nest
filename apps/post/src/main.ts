import { NestFactory } from '@nestjs/core';
import { PostModule } from './post.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.createApplicationContext(PostModule);
  // app.

  const app = await NestFactory.create(PostModule);
const microservice = app.connectMicroservice<MicroserviceOptions>({
  transport: Transport.TCP,
});

await app.startAllMicroservices();
await app.listen(3000);
  
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(PostModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqp://localhost:5672'],
  //     queue: 'cats_queue',
  //     queueOptions: {
  //       durable: false
  //     },
  //   },
  // });
  // const app = await NestFactory.create(PostModule);
  // const app = await NestFactory.create(PostModule);
  // await app.listen();
}
bootstrap();
