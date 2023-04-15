import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomService {
    getCustom(): string {
        return 'This is a Custom API!';
      }
}
