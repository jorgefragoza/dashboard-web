import { apiRequester } from './api-requester';
import {autoinject} from 'aurelia-framework';

@autoinject
export class auth {
    constructor(private api: apiRequester) {
    }

    public async stepOne(user: string) {
        return await this.api.get('http://localhost:3000/api/auth/stepone/' + user);
    }

    public async stepTwo(user: string, password: string) {
        let payload = {
            username : user,
            password: password
        };
        return await this.api.post('http://localhost:3000/api/auth/steptwo/', payload);
    }
}