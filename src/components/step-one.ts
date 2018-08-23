import { autoinject, observable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { auth } from './../services/auth';

@autoinject
export class stepOne {
    @observable user: string = '';
    private message: string = '';
    private animated: string = '';

    constructor(private ea: EventAggregator, private auth: auth) {
    }

    userChanged() {
        this.message = '';
    }

    async validate() {
        let result = await this.auth.stepOne(this.user)

        if(result.data)
            this.onSuccess(result.data);
        else
            this.onError();
    }

    private onError() {
        this.animated = 'animated shake';;
        this.message = 'usuario invalido..';
    }

    private onSuccess(data: any) {
        let payload = {
            step: 1,
            to: 2,
            data: data.username
        };

        this.ea.publish('login-event', payload);
    }
}