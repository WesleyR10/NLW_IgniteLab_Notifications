import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['civil-dove-8343-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2l2aWwtZG92ZS04MzQzJDJrgayY_MtIIntGBjnLYlXgLWOHbtIdmsjAYenuY0E',
          password:
            'YTFmNzkwMWUtNGI2MC00N2MwLTllODItNzQyZGI0OGNmMmQ1',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}