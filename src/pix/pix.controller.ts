import { Body, Controller, Post } from '@nestjs/common';
import { PixService } from './pix.service';

interface IParameter {
  version: string;
  key: string;
  city: string;
  name: string;
  value?: number;
  transactionId?: string;
  message?: string;
  cep?: string;
  currency?: number;
  countryCode?: string;
}

interface IResponse {
  payload: string;
}

@Controller('pix')
export class PixController {
  constructor(private readonly pixService: PixService) {}

  @Post()
  async gerarPix(@Body() pix: IParameter): Promise<IResponse> {
    const pixGerado = await this.pixService.geraPix(pix);
    const response: IResponse = {
      payload: pixGerado.payload(),
    };

    return response;
  }
}
