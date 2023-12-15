import { Module } from '@nestjs/common';
import { PixService } from './pix.service';
import { PixController } from './pix.controller';

@Module({
  providers: [PixService],
  controllers: [PixController]
})
export class PixModule {}
