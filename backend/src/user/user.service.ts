import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUserByID() :string {
        return 'Running';
    }
}
